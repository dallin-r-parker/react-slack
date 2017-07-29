const initialState = {
	email: 'test@test.com',
	password: 'test',
	authed: false
}



export default function loginReducer(state=initialState,action) {
	const {type, payload} = action

	switch(type){
		case 'USER_EMAIL':
			return Object.assign({}, state, {email: payload})
		case 'USER_PW':
			return Object.assign({}, state, {password: payload})
		case 'USER_AUTHED':
			return Object.assign({}, state, {authed: true})
		default:
			return state
	}
}
