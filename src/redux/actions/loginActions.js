export function addEmail(value) {
	return {
		type: 'USER_EMAIL',
		payload: value
	}
}

export function addPw(value) {
	return {
		type: 'USER_PW',
		payload: value
	}
}