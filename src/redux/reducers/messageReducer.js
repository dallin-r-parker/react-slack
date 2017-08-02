const initialState = {
  message: '',
  messages: [],
  currentUser: '',
  userId: ''
};

export default function messageReducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(type, payload);
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
    default:
      return state;
  }
}
