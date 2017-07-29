const app = require('../server')

exports.getAll = (req, res) => {
	const db = app.get('db')
	const {user_id} = req.session.user
	db.all_channels([user_id]).then(res => {
		let channels = res.map(e => (e.channel_name))
		res.status(200).send(channels)
	})
		.catch(err => res.status(404).send(err))
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