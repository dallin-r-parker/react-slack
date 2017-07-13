import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import Nav from './components/Nav/Nav'
import DirectChannels from './components/DirectChannels/DirectChannels'
import CreateChannel from './components/CreateChannel/CreateChannel'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal(){
    this.setState({showModal: true})
  }

  handleCloseModal(){
    this.setState({showModal: false})
  }




  render() {
    const navChannels = this.props.channels.map((channel, i) => (
      <Nav key={i} channels={channel}/>
    ))

    const directChannel = this.props.directChannels.map((dm, i) => (
      <DirectChannels key={i} dm={dm}/>
    ))

    return (
      <div className="main-container">
        <nav className="nav-container">
          <nav id="nav-channels">CHANNELS
            <i onClick={this.handleOpenModal}
              className="fa fa-plus-circle" aria-hidden="true"></i>
            {this.state.showModal ? <CreateChannel action={this.handleCloseModal}/> : null}
          </nav>
          { navChannels }
          <nav id="nav-dm">DIRECT MESSAGES
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </nav>
          { directChannel }
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    channels: state.channels,
    directChannels: state.directChannels
  }
}

export default connect(mapStateToProps)(App)