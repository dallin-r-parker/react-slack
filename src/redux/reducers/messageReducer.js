const initialState = {
	message: '',
	messages: []
}

export default function messageReducer(state=initialState, action) {
	const {type, payload} = action
	console.log(type, payload)
	switch(type){
		case 'UPDATE_MESSAGE':
			return Object.assign({}, state, {message: payload})
		case 'UPDATE_MESSAGES':
			return Object.assign({}, state, {messages: [...state.messages, payload]})
		default:
			return state
	}
}