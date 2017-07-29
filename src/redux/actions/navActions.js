import axios from 'axios'

export function getChannels(channels){
	return function (dispatch) {
		axios.get('/api/channels')
			.then(res => {
				console.log("nav: ", res)
			})

		//dispatch({
		//	type: 'GET_CHANNELS',
		//	payload: channels
		//})
	}

}

export function handleChannelChange(value) {
	return {
		type: 'ADD_NEW_CHANNEL',
		payload: value
	}
}

export function addChannel(value){
	console.log(value)
	//const {channels, id} = value
	//console.log(channels, id)
	return function (dispatch) {
		axios.post('/api/channel', value)
			.then(res => {
				console.log("ADDChannel: ", res)
			})
	//	return {
	//		type: 'ADD_CHANNEL',
	//		payload: value
	//	}
	}
	
}


export function handleModal(value) {
	return{
		type: 'TOGGLE_MODAL',
		payload: value
	}
}

