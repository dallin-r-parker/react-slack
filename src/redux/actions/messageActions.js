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

export function updateCurrentUser(value) {
	return {
		type: 'UPDATE_CURRENT_USER',
		payload: value
	}
}

export function updateUserId(value) {
	return {
		type: 'UPDATE_USERID',
		payload: value
	}
}
