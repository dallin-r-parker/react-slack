import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import Nav from './components/Nav/Nav'
import DirectChannels from './components/DirectChannels/DirectChannels'
import {addChannel, getChannels} from './redux/reducer'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      newChannel: ''
    }
    this.handleAddChannel = this.handleAddChannel.bind(this)
  }
  
  handleAddChannel(){
    console.log("working")
	  this.props.addChannel(this.state.newChannel)
  }

  handleChange(e){
    this.setState({
      newChannel: e.target.value
    })
  }

  componentDidMount(){
    this.props.getChannels()
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
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </nav>
          { navChannels }
          <nav id="nav-dm">DIRECT MESSAGES
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </nav>
          { directChannel }
        </nav>
      <div style={{position: 'absolute', right: 0, top: 0, border: '1px solid red'}}>
        <input type="text"
               onChange={e => this.handleChange(e)}
               value={this.state.newChannel}/>
        <button onClick={this.handleAddChannel}>click</button>
      </div>
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

export default connect(mapStateToProps, { addChannel, getChannels })(App)