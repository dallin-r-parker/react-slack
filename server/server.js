require('dotenv').config()
const cors = require('cors')
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const channels = ['lead', 'random', 'working', 'devTeam'];


// INITIATE EXPRESS APP/SOCKETS & SET LISTENING PORT ================
const app = module.exports = express();
const http = require('http').Server(app)
const io = require('socket.io')(http)
app.set('port', process.env.PORT || 5050)

// MIDDLEWARE FOR EVERYTHING TO PASS THROUGH ================
//const {corsHeaders} = require('./middleware/middleware')
app.use(cors())
app.use(bodyParser.json())
//app.use(corsHeaders)

// MASSIVE DB ==========================================
massive(process.env.DB_CONNECTION)
	.then(db => app.set('db', db))
	.catch((err) => (console.log("DB Error: ", err)))

// EXPRESS SESSIONS =====================================
app.use(session({
	secret: process.env.SESSION_SECRET,
	saveUninitialized: false,
	resave: false
}));

// SERVER CONTROLLERS ==================================
const {loginUser} = require('./controllers/userCtrl')

//AUTH ENDPOINTS ================================
app.post('/api/login', loginUser)
//app.get('/success', checkAuthed)
//app.get('/api/current-user', loginUser)
//app.post('/api/register', registerUser)

//SOCKET-IO ENDPOINTS ================================
io.on('connection', (socket) => {
	console.log('user connected')
	socket.on('chat_message', data => {
		socket.broadcast.emit('chat_message', data)
		socket.emit('chat_message', data)
	})
})



app.get('/channel/message', (req, res) => {
	res.send('<h1>Hello world</h1>')
})

// GET ENDPOINTS ======================================
app.get('/api/channels', (req, res, next) => {
	res.status(200).send(channels)
})

// GET ENDPOINTS ======================================
app.post('/api/addchannels', (req, res, next) => {
})



http.listen(app.get('port'), () => {
	console.log('listening on: ', app.get('port'))
})