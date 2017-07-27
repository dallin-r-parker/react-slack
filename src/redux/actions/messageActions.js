export function updateInput(value){
	return {
		type: 'UPDATE_MESSAGE',
		payload: value
	}
}

export function updateMessages(value){
	return {
		type: 'UPDATE_MESSAGES',
		payload: value
	}
}

