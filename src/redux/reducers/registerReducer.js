const initialState = {
	first: '',
	last: '',
	email: '',
	password: ''
}

export default function registerReducer(state=initialState, action) {
	const {type, payload} = action

	switch (type){
		case 'UPDATE_FIRST':
			return Object.assign({}, state, {first: payload})
		case 'UPDATE_LAST':
			return Object.assign({}, state, {last: payload})
		case 'UPDATE_EMAIL':
			return Object.assign({}, state, {email: payload})
		case 'UPDATE_PW':
			return Object.assign({}, state, {password: payload})
	}
	return state
}