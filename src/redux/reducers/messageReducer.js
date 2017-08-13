const initialState = {
  message: '',
  messages: [],
  giphMessages: [],
  currentUser: '',
  userId: ''
};

export default function messageReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_MESSAGE':
      return Object.assign({}, state, { message: payload });
    case 'UPDATE_MESSAGES':
      return Object.assign({}, state, {
        messages: [...state.messages, payload]
      });
    case 'UPDATE_USERID':
      return Object.assign({}, state, { userId: payload });
    case 'UPDATE_CURRENT_USER':
      return Object.assign({}, state, {
        currentUser: `${payload.firstname} ${payload.lastname}`
      });
    case 'UPDATE_GIPHY':
      return Object.assign({}, state, { giphy: payload });
    case 'UPDATE_GIPH_MESSAGES':
      return Object.assign({}, state, {
        giphMessages: [...state.giphMessages, payload]
      });
    default:
      return state;
  }
}
