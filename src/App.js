import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import DirectChannels from './components/DirectChannels/DirectChannels'
import CreateChannel from './components/CreateChannel/CreateChannel'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      showModal: false,
      newChannel: '',
	    channels: ['home', 'random', 'working', 'devTeam'],
	    directChannels: ['Dallin', 'Cameron', 'Mikayda']
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addChannel = this.addChannel.bind(this)
  }

  handleOpenModal(){
    this.setState({showModal: true})
  }

  handleCloseModal(){
    this.setState({
      showModal: false,
      newChannel: ''
    })
  }

  handleChange(value){
    this.setState({newChannel: value})
  }

  addChannel(){
    this.setState({
      channels: [...this.state.channels, this.state.newChannel],
      showModal: false
    })
  }


  render() {
    const navChannels = this.state.channels.map((channel, i) => (
      <Nav key={i} channels={channel}/>
    ))

    const directChannel = this.state.directChannels.map((dm, i) => (
      <DirectChannels key={i} dm={dm}/>
    ))

    return (
      <div className="main-container">
        <nav className="nav-container">
          <nav id="nav-channels">
            <p onClick={this.handleOpenModal}>CHANNELS
             <i onClick={this.handleOpenModal} className="fa fa-plus-circle" aria-hidden="true">{/* */}</i>
            </p>
            {this.state.showModal ? <CreateChannel action={this.handleCloseModal}
                                                   newChannel={this.handleChange}
                                                   add={this.addChannel}
                                                   value={this.state.newChannel}/> : null}
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

export default App