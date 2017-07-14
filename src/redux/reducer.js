const initialState = {
	channels: ['home', 'random', 'working', 'devTeam'],
	directChannels: ['Dallin', 'Cameron', 'Mikayda']
}

export default function reducer(state=initialState, action) {
	return state
}

//export default function reducer(state=initialState, action){
//	const { type, payload } = action;
//	console.log("channelReducer State: ", state)
//
//	switch(type){
//		case 'ADD_CHANNEL':
//			return Object.assign({}, state, {channels: [payload]})
//		default:
//			return state
//	}
//}
//
//
//export function addChannel(channel){
//	return{
//		type: 'ADD_CHANNEL',
//		payload: channel
//	}
//}
