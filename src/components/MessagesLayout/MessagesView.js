import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import moment from 'moment';
import Header from '../Header/Header';
import ChatInput from './ChatInput/ChatInput';
import Messages from './Messages';
import GiphMessage from './GiphMessage';
import './MessagesView.css';
import {
  updateGiphy,
  updateInput,
  updateMessages,
  updateGiphMessages
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
    socket.on('chat_message', data => {
      const time = moment().format('h:mm A');
      if (!data.data) {
        const newMessage = {
          time: time,
          message: data,
          user: this.props.currentUser
        };
        this.props.updateMessages(newMessage);
      } else if (data.data) {
        const url = data.data[0].images.downsized;
        const newMessage = {
          time: time,
          message: this.props.message,
          user: this.props.currentUser,
          url
        };
        this.props.updateGiphMessages(newMessage);
      }
    });
  }

  sendMessage(e) {
    const { message } = this.props;
    if (e === 13 && message.includes('/giphy')) {
      this.props.updateInput('');
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
        />
      );
    });

    const giphmessages = this.props.giphMessages.map((e, i) => {
      return (
        <GiphMessage
          key={i}
          message={e.message.message}
          user={e.user}
          time={e.time}
          url={e.url.url}
        />
      );
    });
    return (
      <div className="message-wrap">
        <Header />
        <div className="message-container">
          {giphmessages}
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
    giphMessages: messageReducer.giphMessages,
    currentUser: messageReducer.currentUser,
    userId: messageReducer.userId
  };
}

export default connect(mapStateToProps, {
  updateInput,
  updateMessages,
  updateGiphy,
  updateGiphMessages
})(MessagesLayout);
