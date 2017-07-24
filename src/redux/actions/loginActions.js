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

export function userAuthed(value) {
	return {
		type: 'USER_AUTHED',
		payload: value
	}
}