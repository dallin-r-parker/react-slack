import axios from 'axios';
import { updateCurrentUser } from './messageActions';

export function checkUser() {
  return function(dispatch) {
    axios.get('/api/check-user').then(({ data }) => {
      const { firstname, lastname } = data;
      const currUser = Object.assign({}, { firstname, lastname });
      dispatch(updateCurrentUser(currUser));
    });
  };
}

export function getChannels() {
  return function(dispatch) {
    axios.get('/api/all-channels').then(({ data }) => {
      console.log('getChannels REs: ', data);
      dispatch({
        type: 'GET_CHANNELS',
        payload: data
      });
    });
  };
}

export function handleChannelChange(value) {
  return {
    type: 'ADD_NEW_CHANNEL',
    payload: value
  };
}

export function addChannel(value) {
  return function(dispatch) {
    axios.post('/api/channel', value).then(res => {
      const channelName = res.data.map(e => e.channel_name);
      dispatch({
        type: 'ADD_CHANNEL',
        payload: channelName
      });
    });
  };
}

export function handleModal(value) {
  return {
    type: 'TOGGLE_MODAL',
    payload: value
  };
}

export function handleAddImg(value) {
  return {
    type: 'ADD_IMG',
    payload: value
  };
}
