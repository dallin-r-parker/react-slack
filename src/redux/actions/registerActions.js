export function updateFirst(value) {
	return{
		type: 'UPDATE_FIRST',
		payload: value
	}
}

export function updateLast(value) {
	return{
		type: 'UPDATE_LAST',
		payload: value
	}
}

export function updateEmail(value) {
	return{
		type: 'UPDATE_EMAIL',
		payload: value
	}
}

export function updatePW(value) {
	return{
		type: 'UPDATE_PW',
		payload: value
	}
}

export function updateAccount(value) {
	return{
		type: 'ACCOUNT_CREATED',
		payload: value
	}
}