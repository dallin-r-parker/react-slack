import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import moment from 'moment';
import Header from '../Header/Header';
import ChatInput from './ChatInput/ChatInput';
import Messages from './Messages';
import './MessagesView.css';
import {
  updateInput,
  updateMessages,
  updateGiphy
} from '../../redux/actions/messageActions';
const socket = io();

class MessagesLayout extends Component {
  constructor(props) {
    super(props);
    this.connectUser = this.connectUser.bind(this);
    this.handleChatMessage = this.handleChatMessage(this);
    this.handleChatUpdate = this.handleChatUpdate.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    this.connectUser();
  }

  connectUser() {
    socket.on('user_connected', this.props.currentUser);
  }

  handleChatMessage() {
    //TODO: WORK ON MAKING SURE THE USER IS SENDING THEIR NAME & Receiving OTHER NAMES
    socket.on('chat_message', data => {
      const time = moment().format('h:mm A');
      const newMessage = {
        time: time,
        message: data,
        user: this.props.currentUser
      };
      const reset = '';
      this.props.updateMessages(newMessage);
      this.props.updateInput(reset);
    });
  }

  handleChatUpdate(value) {
    this.props.updateInput(value);
  }

  sendMessage(e) {
    if (e === 13 && this.props.message === '/giphy') {
      console.log('giphy');
      this.props.updateGiphy(true);
      //socket.emit('chat_message', { message: this.props.message });
    } else if (e === 13) {
      socket.emit('chat_message', { message: this.props.message });
    }
  }

  render() {
    const messages = this.props.messages.map((e, i) => {
      return (
        <Messages
          key={i}
          message={e.message.message}
          user={e.user}
          time={e.time}
        />
      );
    });
    return (
      <div className="message-wrap">
        <Header />
        <div className="message-container">
          {messages}
        </div>
        <ChatInput
          update={this.handleChatUpdate}
          action={this.sendMessage}
          value={this.props.message}
        />
      </div>
    );
  }
}

function mapStateToProps({ messageReducer }) {
  return {
    message: messageReducer.message,
    messages: messageReducer.messages,
    currentUser: messageReducer.currentUser,
    userId: messageReducer.userId
  };
}

export default connect(mapStateToProps, {
  updateInput,
  updateMessages,
  updateGiphy
})(MessagesLayout);
