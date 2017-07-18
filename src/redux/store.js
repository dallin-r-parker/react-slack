import {createStore, applyMiddleware, combineReducers} from 'redux'
import navReducer from './reducers/navReducer'
import loginReducer from './reducers/loginReducer'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk)

function combine(){
	return {
		navReducer,
		loginReducer
	}
}

export default createStore(combineReducers(combine()), middleware)