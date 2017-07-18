require('dotenv').config()
const cors = require('cors')
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')


// INITIATE EXPRESS APP & SET LISTENING PORT ================
const app = module.exports = express();
app.set('port', process.env.PORT || 5050)

// MIDDLEWARE FOR EVERYTHING TO PASS THROUGH ================
app.use(cors())
app.use(bodyParser.json())

// PASSPORT STRATEGY ===================================
const passport = require('./auth/passport')

// MASSIVE DB ==========================================
massive(process.env.DB_CONNECTION).then(db => {
	app.set('db', db)
}).catch((err) => (console.log("DB Error: ", err)))

const channels = ['lead', 'random', 'working', 'devTeam'];

// EXPRESS SESSIONS =====================================
app.use(session({
	secret: process.env.SESSION_SECRET,
	saveUninitialized: false,
	resave: false,
	cookie: {
		secure: true
	}
}));
//app.use(passport.initialize())
//app.use(passport.session())

// MIDDLEWARE POLICY ===================================
//const checkAuthed = (req, res, next) => {
//	console.log('middleware: ', req.isAuthenticated())
//  if(!req.isAuthenticated()) return res.status(401).send("Unauthorized")
//	return next()
//};

// SERVER CONTROLLERS ==================================
//const { registerUser, successUser } = require('./controllers/userCtrl');

// LOCAL AUTH ENDPOINTS ================================
//app.post('/api/login', passport.authenticate('local', {
//	successRedirect: '/success',
//}));
//app.get('/success', checkAuthed, successUser)
//app.get('/api/current-user', checkAuthed)
//app.post('/api/register', registerUser)

app.post('/api/login', (req, res, next) => {
	(req.body) ? res.status(200).send(req.body) : res.status(404).send()
})

app.get('/api/channels', (req, res, next) => {
	res.status(200).send(channels)
})

app.post('/api/addchannels', (req, res, next) => {
})



app.listen(app.get('port'), () => {
	console.log('listening on: ', app.get('port'))
})