const initialState = {
  channels: [],
  directChannels: ['Dallin', 'Cameron', 'Mikayda'],
  newChannel: '',
  showModal: false,
  addImg: false
};

export default function navReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_CHANNEL':
      return Object.assign({}, state, {
        channels: [...state.channels, payload]
      });
    case 'GET_CHANNELS':
      return Object.assign({}, state, {
        channels: [...state.channels, ...payload]
      });
    case 'ADD_NEW_CHANNEL':
      return Object.assign({}, state, { newChannel: payload });
    case 'TOGGLE_MODAL':
      return Object.assign({}, state, { showModal: payload });
    case 'ADD_IMG':
      return Object.assign({}, state, { addImg: payload });
    default:
      return state;
  }
}
