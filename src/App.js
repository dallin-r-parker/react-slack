import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'

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
      <div>
        {dm}
      </div>
    ))

    return (
      <div className="main-container">
        <nav className="nav-container">
          { navChannels }
          { directChannel }
        </nav>
      </div>
    );
  }
}

export default App;

//todo: create directChannel component
//todo: style the default top part of both dm & nav channels
//todo: add redux into it and start creating reducers