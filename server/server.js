require('dotenv').config()
const cors = require('cors')
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

//TODO: parse all login's to lowercase and return all with first letter capitalized
//TODO: if someone add's a "#" to their channel, remove it. use regex

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
const {loginUser, registerUser, checkUser} = require('./controllers/userCtrl')
const {getAll, addChannel} = require('./controllers/channelCtrl')
const {getMessage, addMessage} = require('./controllers/messageCtrl')
const {giphyGet} = require('./controllers/giphyCtrl')
const {mainChannel} = require('./sockets/channelSockets')

//AUTH ENDPOINTS ================================
app.post('/api/login', loginUser)
app.post('/api/register', registerUser)

//SOCKET-IO ENDPOINTS ================================
io.on('connection', mainChannel)

// GET ENDPOINTS ======================================
app.get('/api/all-channels', getAll)
app.get('/api/channel-messages', getMessage)
app.get('/api/check-user', checkUser)
// GIPHY ENDPOINTS =====================================
app.post('/api/giphy/query?=', giphyGet)
app.post('/api/add-message', addMessage)
// POST ENDPOINTS ======================================
app.post('/api/channel', addChannel)




http.listen(app.get('port'), () => {
	console.log('listening on: ', app.get('port'))
})