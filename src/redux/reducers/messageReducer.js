const initialState = {
	message: '',
	messages: []
}

export default function messageReducer(state=initialState, action) {
	const {type, payload} = action

	switch(type){
		case 'UPDATE_MESSAGE':
			return Object.assign({}, state, {message: payload})
		default:
			return state
	}
}