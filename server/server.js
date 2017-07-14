const bodyParser = require('body-parser')
const express = require('express')
const massive = require('massive')
const cors = require('cors')

const app = exports = express()
app.set('port', process.env.PORT || 8080)

app.use(bodyParser.json())
app.use(cors())


app.listen(app.get('port'), () => {
	console.log(`chat server running on: `, app.get('port'))
})