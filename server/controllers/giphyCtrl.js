require('dotenv').config()
const axios = require('axios')

exports.giphyGet = () => {
	axios.get(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${process.env.GIPHY_KEY}&limit=1`)
		.then(res => console.log(res.data))
}