const app = require('../server')


const {hashPW, verifyPW} = require('./encrypt')

exports.loginUser = (req, res, next) => {
	const {email, password} = req.body
	const lowEmail = email.toLowerCase()
	const lowPW = password.toLowerCase()

	app.get('db').check_by_email([lowEmail]).then(user => {
		if(user.length === 0) return res.status(404).send("Not Found")
		user = user[0]
		if(verifyPW(lowPW, user.password)){
			delete user.email
			delete user.password
			req.session.user = user
			res.status(200).send(user)
		}
	})
}

exports.registerUser = (req, res) => {
	const db = app.get('db')
	const { first, last, email, password } = req.body
	const pw = hashPW(password)

	db.check_by_email([email]).then(user => {
		if(user.length > 1) {
			return res.status(409).send()
		} else {
			db.register_user([first, last, email, pw]).then(user => {
				if (!user) return res.status(404).send("User Not Found")
				return res.status(200).send('Account Created')
			})
		}
	})
}

exports.checkUser = ({session}, res) => {
	const {user} = session
	if(!user) return res.status(404).send()
	console.log(user)
	res.status(200).send(user)
}
