const initialState = {
	message: '',
	messages: [],
	currentUser: '',
	userId: ''
}

export default function messageReducer(state=initialState, action) {
	const {type, payload} = action

	switch(type){
		case 'UPDATE_MESSAGE':
			return Object.assign({}, state, {message: payload})
		case 'UPDATE_MESSAGES':
			return Object.assign({}, state, {messages: [...state.messages, payload]})
		default:
			return state
	}
}