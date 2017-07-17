import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import './App.css';
import Nav from './components/Nav/Nav'
import DirectChannels from './components/DirectChannels/DirectChannels'
import CreateChannel from './components/CreateChannel/CreateChannel'
import {addChannel, getChannels, handleModal} from './redux/reducer'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      newChannel: ''
    }
    this.handleAddChannel = this.handleAddChannel.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
	  this.handleCloseModal = this.handleCloseModal.bind(this)
  }
  
  handleAddChannel(){
	  this.props.addChannel(this.state.newChannel)
  }

  handleChange(e){
    this.setState({
      newChannel: e.target.value
    })
  }

  handleOpenModal(){
    let value = true;
    this.props.handleModal(value)
  }

  handleCloseModal(){
	  let value = false;
	  this.props.handleModal(value)
  }

  componentDidMount(){
    axios({
	    url: 'http://localhost:8080/api/channels',
		  method: 'GET'
    }).then(res => {
      this.props.getChannels(res.data)
    })
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
          <nav id="nav-channels">
            <p onClick={this.handleOpenModal}>CHANNELS
              <i onClick={this.handleOpenModal} className="fa fa-plus-circle" aria-hidden="true">{/* */}</i>
            </p>
					  {this.props.showModal ? <CreateChannel action={this.handleCloseModal}
                                                   newChannel={this.handleChange}
                                                   add={this.addChannel}
                                                   value={this.props.newChannel}/> : null}
          </nav>
				  { navChannels }
          <nav id="nav-dm">
            <p>DIRECT MESSAGES
              <i className="fa fa-plus-circle" aria-hidden="true">{/* */}</i>
            </p>
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
    directChannels: state.directChannels,
    showModal: state.showModal
  }
}

export default connect(mapStateToProps, { addChannel, getChannels, handleModal })(App)