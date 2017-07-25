import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { userAuthed } from './redux/actions/loginActions'

class Root extends Component{

	componentWillMount(){
		if(!this.props.authed) {
			return <Redirect to="/login" />
		} else {
			return (
				<Redirect to="/home" />
			)

		}
	}

	render(){
		return(
			<div>
				{this.componentWillMount()}
			</div>
		)
	}
}

function mapStateToProps({loginReducer}) {
	return {
		email: loginReducer.email,
		password: loginReducer.password,
		authed: loginReducer.authed
	}
}

export default connect(mapStateToProps, {userAuthed})(Root)