const app = require('../server');
const bcrypt = require('bcryptjs');


hashPW = (password) => {
	let salt = bcrypt.genSaltSync(10);
	let hash = bcrypt.hashSync(password, salt);
	return hash;
};

exports.registerUser = (req, res, next) => {
	const db = app.get('db');
	const { firstname, lastname, email, password } = req.body
	console.log(firstname, lastname, email, password)
	const pw = hashPW(password)

	db.check_by_email([email]).then(user => {
		if(user.length > 1) {
			return res.status(409).send()
		} else {
			db.register_user([firstname, lastname, email, pw]).then(user => {
				console.log(user)
				if (!user) return res.status(404).send("User Not Found")
				return res.status(200).send('Account Created')
			})
		}
	})
}

exports.successUser = (req, res, next) => {
	const {user} = req;
	if(!user) return res.status(401).send("User Not Found")
	delete user[0].password
	delete user[0].email
	console.log("successFinal: ", user)
	return res.status(200).send(user)
}