const initialState = {
	email: '',
	password: '',
	authed: false
}


export default function loginReducer(state=initialState,action) {
	const {type, payload} = action

	switch(type){
		case 'USER_EMAIL':
			return Object.assign({}, state, {email: payload})
		case 'USER_PW':
			return Object.assign({}, state, {password: payload})
		default:
			return state
	}
}