import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      channels: ['home', 'random', 'working']
    }
  }

  render() {
    const navChannels = this.state.channels.map((channel, i) => (
      <Nav key={i} channels={channel}/>
    ))

    return (
      <div className="main-container">
        <nav className="nav-container">
          { navChannels }
        </nav>
      </div>
    );
  }
}

export default App;