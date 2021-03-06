import axios from 'axios';
import { updateCurrentUser, updateUserId } from './messageActions';

export function addEmail(value) {
  return {
    type: 'USER_EMAIL',
    payload: value
  };
}

export function addPw(value) {
  return {
    type: 'USER_PW',
    payload: value
  };
}

export function userAuthed(user) {
  return function(dispatch) {
    axios
      .post('/api/login', user)
      .then(({ data }) => {
        dispatch({
          type: 'USER_AUTHED',
          payload: data
        });
        const { user_id, firstname, lastname } = data;
        const currUser = Object.assign({}, { firstname, lastname });

        dispatch(updateCurrentUser(currUser));
        dispatch(updateUserId(user_id));
      })
      .catch(err => console.log(err));
  };
}
