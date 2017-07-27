import {createStore, applyMiddleware, combineReducers} from 'redux'
import navReducer from './reducers/navReducer'
import loginReducer from './reducers/loginReducer'
import messageReducer from './reducers/messageReducer'
import registerReducer from './reducers/registerReducer'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk)

function combine(){
	return {
		navReducer,
		loginReducer,
		messageReducer,
		registerReducer
	}
}

export default createStore(combineReducers(combine()), middleware)