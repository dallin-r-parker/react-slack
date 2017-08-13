import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import App from '../App';

class ChannelCheck extends Component {
  componentDidMount() {
    return (
      <Route
        path="/channels"
        render={() => (this.props.authed ? <App /> : <Redirect to="/" />)}
      />
    );
  }

  render() {
    return (
      <div>
        {this.componentDidMount()}
      </div>
    );
  }
}

function mapStateToProps({ loginReducer }) {
  return {
    authed: loginReducer.authed
  };
}

export default connect(mapStateToProps)(ChannelCheck);
