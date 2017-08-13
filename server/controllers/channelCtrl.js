const app = require('../server')

exports.getAll = (req, res) => {
	const {user_id} = req.session.user
	if(!user_id) return res.status(404).send()
	const db = app.get('db')
	db.all_channels([user_id]).then(channels => {
		res.status(200).send(channels)
	})
		.catch(err => console.log("ERR: ", err ))
}

exports.addChannel = (req, res) => {
	const db = app.get('db')
	const {channel, id} = req.body
	db.add_channel([channel, id]).then(channel => {
		if (channel.length < 1) return res.status(404).send()
		res.status(200).send(channel)
	})
		.catch(err => res.status(404).send())
}