const initialState = {
  message: '',
  messages: [],
  currentUser: '',
  userId: '',
  giphy: false
};

export default function messageReducer(state = initialState, action) {
  const { type, payload } = action;
  console.log('MessageReducer: ', action);

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
    default:
      return state;
  }
}
