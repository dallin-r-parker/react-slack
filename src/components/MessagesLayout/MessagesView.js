import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import moment from 'moment';
import Header from '../Header/Header';
import ChatInput from './ChatInput/ChatInput';
import Messages from './Messages';
import './MessagesView.css';
import {
  updateGiphy,
  updateInput,
  updateMessages,
  updateGiphyUrl
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
  connectUser = () => socket.on('user_connected', this.props.currentUser);
  handleChatUpdate = value => this.props.updateInput(value);

  handleChatMessage() {
    //TODO: WORK ON MAKING SURE THE USER IS SENDING THEIR NAME & Receiving OTHER NAMES
    socket.on('chat_message', data => {
      const time = moment().format('h:mm A');
      const newMessage = {
        time: time,
        message: data,
        user: this.props.currentUser
      };
      this.props.updateMessages(newMessage);
      if (data.data) {
        const query = data.data[0].images.downsized;
        this.props.updateGiphyUrl(query);
      }
    });
  }

  sendMessage(e) {
    const { message, updateGiphy } = this.props;
    if (e === 13 && message.includes('/giphy')) {
      updateGiphy(true);
      socket.emit('chat_message', { message: message, type: 'giphy' });
    } else if (e === 13) {
      socket.emit('chat_message', { message: message, type: null });
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
          giphy={this.props.giphy}
          url={this.props.url}
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
    userId: messageReducer.userId,
    giphy: messageReducer.giphy,
    url: messageReducer.url
  };
}

export default connect(mapStateToProps, {
  updateInput,
  updateMessages,
  updateGiphy,
  updateGiphyUrl
})(MessagesLayout);
