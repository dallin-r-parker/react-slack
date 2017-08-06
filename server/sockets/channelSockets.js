const axios = require('axios')

exports.mainChannel = (socket) => {
	console.log('user connected')

	socket.on('chat_message', data => {
		if (!data.type){
			console.log("chat data: ", data)
			socket.broadcast.emit('chat_message', data)
			socket.emit('chat_message', data)
		}
		else if(data.type === 'giphy'){
			console.log("giphy data: ",data)
			//axios.get(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${process.env.GIPHY_KEY}&limit=1`)
			//	.then(res => console.log(res.data))
		}
		//socket.broadcast.emit('chat_message', data)
		//socket.emit('chat_message', data)
	})

}