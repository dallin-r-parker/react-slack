const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 8080;

const app = express();
app.use(cors())
app.use(bodyParser.json())


const channels = ['lead', 'random', 'working', 'devTeam'];


app.get('/api/channels', (req, res, next) => {
	res.status(200).send(channels)
})

app.post('/api/addchannels', (req, res, next) => {
})

app.post('/api/login', (req, res, next) => {
	console.log(req.body)
})


app.listen(port, () => {
	console.log(`listening on ${port}`)
})