export function updateInput(value) {
  console.log('updateInput: ', value);
  return {
    type: 'UPDATE_MESSAGE',
    payload: value
  };
}

export function updateMessages(value) {
  return function(dispatch) {
    dispatch({
      type: 'UPDATE_MESSAGES',
      payload: value
    });
    const resetInput = '';
    dispatch(updateInput(resetInput));
  };
}

export function updateCurrentUser(value) {
  return {
    type: 'UPDATE_CURRENT_USER',
    payload: value
  };
}

export function updateUserId(value) {
  return {
    type: 'UPDATE_USERID',
    payload: value
  };
}

export function updateGiphy(value) {
  return {
    type: 'UPDATE_GIPHY',
    payload: value
  };
}

export function updateGiphMessages(value) {
  console.log('updateGiph: ', value);
  return {
    type: 'UPDATE_GIPH_MESSAGES',
    payload: value
  };
}
