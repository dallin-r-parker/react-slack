require('dotenv').config()
const cors = require('cors')
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')


// INITIATE EXPRESS APP & SET LISTENING PORT ================
const app = module.exports = express();
app.set('port', process.env.PORT || 8080)

// MIDDLEWARE FOR EVERYTHING TO PASS THROUGH ================
app.use(cors())
app.use(bodyParser.json())

// PASSPORT STRATEGY ===================================
const passport = require('./controllers/auth/passport')

// MASSIVE DB ==========================================
massive(process.env.DB_CONNECTION).then(db => {
	app.set('db', db)
}).catch((err) => (console.log("massive DB Error: ", err)))

const channels = ['lead', 'random', 'working', 'devTeam'];

// MIDDLEWARE POLICY ===================================
const checkAuthed = (req, res, next) => {
	if(!req.isAuthenticated()) return res.status(401).send("Unauthorized")
	return next()
};

// EXPRESS SESSIONS =====================================
app.use(session({
	saveUninitialized: false,
	resave: false
}));
app.use(passport.initialize())
app.use(passport.session())


app.get('/api/channels', (req, res, next) => {
	res.status(200).send(channels)
})

app.post('/api/addchannels', (req, res, next) => {
})

app.post('/api/login', (req, res, next) => {
	console.log(req.body)
})


app.listen(app.get('port'), () => {
	console.log('listening on: ', app.get('port'))
})