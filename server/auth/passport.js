//const passport = require('passport');
//const LocalStrategy = require('passport-local').Strategy;
//const bcrypt = require('bcryptjs');
//
//const app = require('../server');
//
//const verifyPW = (submittedPW, userPW) => {
//	return bcrypt.compareSync(submittedPW, userPW);
//};
//
//passport.use(new LocalStrategy({
//	usernameField: 'email',
//	passwordField: 'password'
//}, (email, password, done) => {
//	app.get('db').check_by_email([email]).then(user => {
//		user = user[0];
//		console.log(user)
//		if(!user) return done(null, false)
//		console.log(verifyPW(password, user.password))
//		if(verifyPW(password, user.password)) return done(null, user);
//		console.log('Strategy: ', user)
//		return done(null, false);
//	})
//}))
//
//passport.serializeUser((user, done) =>{
//	console.log("serialize: ", user.user_id)
//	return done(null, user);
//});
//
//passport.deserializeUser((id, done) => {
//	console.log(id)
//	app.get('db').user_search_id([id]).then(response => {
//		console.log("deserialize: ", response)
//		return done(null, response)
//	})
//});
//
//module.exports = passport;