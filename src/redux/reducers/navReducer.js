const initialState = {
	channels: [],
	directChannels: ['Dallin', 'Cameron', 'Mikayda'],
	showModal: false,
	newChannel: ''
}

console.log(initialState.newChannel)

export default function reducer(state=initialState, action){
	const {type, payload} = action

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