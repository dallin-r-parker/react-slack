const initialState = {
	channels: [],
	directChannels: ['Dallin', 'Cameron', 'Mikayda'],
	showModal: false,
	newChannel: ''
}

export default function navReducer(state=initialState, action){
	const {type, payload} = action
		console.log(type, payload)
	switch(type){
		case 'ADD_CHANNEL':
			return Object.assign({}, state, {channels: [...state.channels, payload]})
		case 'GET_CHANNELS':
			return Object.assign({}, state, {channels: [...state.channels, ...payload]})
		case 'ADD_NEW_CHANNEL':
			return Object.assign({}, state, {newChannel: payload})
		case 'TOGGLE_MODAL':
			return Object.assign({}, state, {showModal: payload})
		default:
			return state
	}
}