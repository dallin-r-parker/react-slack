require('dotenv').config()
const cors = require('cors')
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const {corsHeaders} = require('./middleware/middleware')


// INITIATE EXPRESS APP & SET LISTENING PORT ================
const app = module.exports = express();
app.set('port', process.env.PORT || 5050)

// MIDDLEWARE FOR EVERYTHING TO PASS THROUGH ================
app.use(cors())
app.use(bodyParser.json())
app.use(corsHeaders)
// MASSIVE DB ==========================================
massive(process.env.DB_CONNECTION).then(db => {
	app.set('db', db)
}).catch((err) => (console.log("DB Error: ", err)))

const channels = ['lead', 'random', 'working', 'devTeam'];

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


app.get('/api/channels', (req, res, next) => {
	res.status(200).send(channels)
})

app.post('/api/addchannels', (req, res, next) => {
})



app.listen(app.get('port'), () => {
	console.log('listening on: ', app.get('port'))
})