import axios from 'axios'
import Login from '../../components/Login/Login/Login'

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
	return function (dispatch) {
		axios.post('/api/channel', value)
			.then(res => {
				const channelName = res.data.map(e => (e.channel_name))

				dispatch({
					type: 'ADD_CHANNEL',
					payload: channelName
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

