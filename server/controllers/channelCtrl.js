const app = require('../server')

exports.getAll = (req, res) => {
	const {user_id} = req.session.user
	if(!user_id) return res.status(404).send()
	const db = app.get('db')
	db.all_channels([user_id]).then(channel => {
		let channels = channel.map(e => (e.channel_name))

		res.status(200).send(channels)
	})
		.catch(err => console.log("ERR: ", err ))
}
exports.addChannel = (req, res) => {
	const db = app.get('db')
	const {channels, id} = req.body
	db.add_channel([id, channels]).then(channel => {
		if (channel.length < 1) return res.status(404).send()
		res.status(200).send(channel)
	})
		.catch(err => res.status(404).send())
}