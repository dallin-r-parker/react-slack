
export function addChannel(channel){
	return {
		type: 'ADD_CHANNEL',
		payload: channel
	}
}

export function getChannels(channels){
	return {
		type: 'GET_CHANNELS',
		payload: channels
	}
}

export function handleModal(value) {
	return{
		type: 'TOGGLE_MODAL',
		payload: value
	}
}