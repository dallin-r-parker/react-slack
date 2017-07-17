const GET_CHANNELS = 'GET_CHANNELS'
const ADD_CHANNEL = 'ADD_CHANNEL'
const TOGGLE_MODAL = 'TOGGLE_MODAL'


const initialState = {
	channels: [],
	directChannels: ['Dallin', 'Cameron', 'Mikayda'],
	showModal: false
}

export default function reducer(state=initialState, action){
	const {type, payload} = action

	switch(type){
		case ADD_CHANNEL:
			return Object.assign({}, state, {channels: [...state.channels, payload]})
		case GET_CHANNELS:
			return Object.assign({}, state, {channels: [...state.channels, ...payload]})
		case TOGGLE_MODAL:
			return Object.assign({}, state, {showModal: payload})
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

export function handleModal(value) {
	return{
		type: TOGGLE_MODAL,
		payload: value
	}

}
