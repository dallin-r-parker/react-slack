import axios from 'axios'

export function getChannels(channels) {
	return function (dispatch) {
		axios.get('/api/channels')
			.then(res => {
					console.log("GetAll", channels)
					dispatch({
						type: 'GET_CHANNELS',
						payload: res.data[0]
					})
			})
	}
}

export function handleChannelChange(value) {
	return {
		type: 'ADD_NEW_CHANNEL',
		payload: value
	}
}

export function addChannel(value) {
	console.log("val", value)
	return function (dispatch) {
		axios.post('/api/channel', value)
			.then(res => {
				console.log("res", res)
				const {channel_name} = res.data
				dispatch({
					type: 'ADD_CHANNEL',
					payload: channel_name
				})
			})
	}
}

export function handleModal(value) {
	return {
		type: 'TOGGLE_MODAL',
		payload: value
	}
}

