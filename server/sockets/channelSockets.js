const io = require('../server')

exports.mainChannel = (socket) => {
	console.log('user connected')
	socket.on('chat_message', data => {
		socket.broadcast.emit('chat_message', data)
		socket.emit('chat_message', data)
	})

}