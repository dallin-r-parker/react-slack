import axios from 'axios'


const initialState = {
	channels: [],
	directChannels: ['Dallin', 'Cameron', 'Mikayda']
}

export default function reducer(state=initialState, action){
	const {type, payload} = action
	switch(type){
		case 'ADD_CHANNEL':
			return Object.assign({}, state, {channels: [...state.channels, payload]})
		case 'GET_CHANNELS':
			return Object.assign({}, state, {channels: [...state.channels, payload]})
		default:
			return state
	}
}

export function addChannel(channel){
	return {
		type: 'ADD_CHANNEL',
		payload: channel
	}
}

export function getChannels() {
	axios({
		url: 'http://localhost:8080/api/channels',
		method: 'GET'
	}).then(res => {
		console.log("reduc REs: ", res)
		//return {
		//	type: 'GET_CHANNELS',
		//	payload: allChannels
		//}
	})

}