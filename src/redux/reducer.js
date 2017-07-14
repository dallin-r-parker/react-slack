const GET_CHANNELS = 'GET_CHANNELS'
const ADD_CHANNEL = 'ADD_CHANNEL'


const initialState = {
	channels: [],
	directChannels: ['Dallin', 'Cameron', 'Mikayda']
}

export default function reducer(state=initialState, action){
	const {type, payload} = action

	switch(type){
		case ADD_CHANNEL:
			return Object.assign({}, state, {channels: [...state.channels, payload]})
		case 'GET_CHANNELS':
			return Object.assign({}, state, {channels: [...state.channels, ...payload]})
		default:
			return state
	}
	
}

export function addChannel(channel){
	return {
		type: ADD_CHANNEL,
		payload: channel
	}
}

export function getChannels(channels){
	return {
		type: GET_CHANNELS,
		payload: channels
	}
}
