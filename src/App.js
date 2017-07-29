import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Nav from './components/Nav/Nav';
import DirectChannels from './components/DirectChannels/DirectChannels';
import CreateChannel from './components/CreateChannel/CreateChannel';
import Messages from './components/MessagesLayout/MessagesView';
import {
  addChannel,
  getChannels,
  handleModal,
  handleChannelChange
} from './redux/actions/navActions';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAddChannel = this.handleAddChannel.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddChannel() {
    const { newChannel, userId } = this.props;
    const channel = Object.assign({}, { channels: newChannel, id: userId });
    this.props.addChannel(channel);
    this.handleCloseModal();
  }

  handleChange = e => this.props.handleChannelChange(e);
  handleOpenModal = () => this.props.handleModal(true);
  handleCloseModal = () => this.props.handleModal(false);

  //componentDidMount() {
  //	console.log("first",this.props.channels)
  //	this.props.getChannels()
  //	console.log("second", this.props.channels)
  //}

  render() {
    const navChannels = this.props.channels.map((channel, i) =>
      <Nav key={i} channels={channel} />
    );
    const directChannel = this.props.directChannels.map((dm, i) =>
      <DirectChannels key={i} dm={dm} />
    );
    return (
      <div className="main-container">
        <nav className="nav-container">
          <nav id="nav-channels">
            <p onClick={this.handleOpenModal}>
              CHANNELS
              <i
                onClick={this.handleOpenModal}
                className="fa fa-plus-circle"
                aria-hidden="true"
              >
                {/* */}
              </i>
            </p>
            {this.props.showModal
              ? <CreateChannel
                  action={this.handleCloseModal}
                  newChannel={this.handleChange}
                  add={this.handleAddChannel}
                  value={this.props.newChannel}
                />
              : null}
          </nav>
          {navChannels}
          <nav id="nav-dm">
            <p>
              DIRECT MESSAGES
              <i className="fa fa-plus-circle" aria-hidden="true">
                {/* */}
              </i>
            </p>
          </nav>
          {directChannel}
        </nav>
        <div className="message-container">
          <Messages />
        </div>
      </div>
    );
  }
}
function mapStateToProps({ navReducer, messageReducer }) {
  return {
    channels: navReducer.channels,
    directChannels: navReducer.directChannels,
    showModal: navReducer.showModal,
    newChannel: navReducer.newChannel,
    userId: messageReducer.userId
  };
}
export default connect(mapStateToProps, {
  addChannel,
  getChannels,
  handleModal,
  handleChannelChange
})(App);
