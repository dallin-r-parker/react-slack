const axios = require('axios')
exports.mainChannel = (socket) => {
	console.log('user connected')
	socket.on('chat_message', data => {
		const {message, type} = data
		if (!type) {
			delete data.type
			console.log(message)
			socket.broadcast.emit('chat_message', data)
			socket.emit('chat_message', data)
			socket.broadcast.emit('testing', data)
			socket.emit('testing', data)
		}
		else if (type === 'giphy') {
			//const query = message.split(' ')
			//console.log(query)
			const query = message.replace('/giphy ', '')
			axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.GIPHY_KEY}&limit=1`)
				.then(res => {
					const {data} = res
					socket.broadcast.emit('chat_message', data)
					socket.emit('chat_message', data)
				})
		}
	})
}
//TODO: create middleware for giphy vs normal request