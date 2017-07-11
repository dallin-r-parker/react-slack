import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import DirectChannels from './components/DirectChannels/DirectChannels'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      channels: ['home', 'random', 'working'],
      directChannels: ['Dallin', 'Cameron']
    }
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
          <nav id="nav-channels">CHANNELS
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
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

export default App;

//todo: style the default top part of both dm & nav channels
//todo: add redux into it and start creating reducers