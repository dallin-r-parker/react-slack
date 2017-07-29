const app = require('../server')


exports.getAll = (req, res, next) => {
	const db = app.get('db')
	const{user_id} = req.session.user
	console.log(user_id)
	db.all_channels([user_id]).then(channels => {
		console.log(res)
		res.send(channels)
	})
		.catch(err => res.status(404).send(err))
}

exports.addChannel = (req, res, next) => {
	const db = app.get('db')
	const {channels, id} = req.body
	db.add_channel([id, channels]).then(channel => {
		console.log("add: ", channel)
	})
}