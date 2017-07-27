const app = require('../server')


const {hashPW, verifyPW} = require('./encrypt')

exports.loginUser = (req, res, next) => {
	req.session.user = user = {email, password} = req.body
	return res.status(200).send(user)
	//app.get('db').check_by_email([email]).then(user => {
	//	console.log("Check Email: ", user)
	//	user = user[0];
	//	if(!user) return done(null, false)
	//	if(verifyPW(password, user.password)) return done(null, user);
	//	console.log('Strategy: ', user)
	//	return done(null, false);
	//})

}

exports.registerUser = (req, res) => {
	const db = app.get('db');
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
