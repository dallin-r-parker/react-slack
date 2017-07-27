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
exports = io

// MIDDLEWARE FOR EVERYTHING TO PASS THROUGH ================
app.use(cors())
app.use(bodyParser.json())


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
const {loginUser, registerUser} = require('./controllers/userCtrl')
const {mainChannel} = require('./sockets/channelSockets')

//AUTH ENDPOINTS ================================
app.post('/api/login', loginUser)
//app.get('/success', checkAuthed)
//app.get('/api/current-user', loginUser)
app.post('/api/register', registerUser)

//SOCKET-IO ENDPOINTS ================================
io.on('connection', mainChannel)

// GET ENDPOINTS ======================================
app.get('/api/channels', (req, res, next) => {
	res.status(200).send(channels)
})

// POST ENDPOINTS ======================================



http.listen(app.get('port'), () => {
	console.log('listening on: ', app.get('port'))
})