import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, Route, withRouter} from 'react-router-dom'
import {userAuthed} from './redux/actions/loginActions'
import Login from './components/Login/Login/Login'

class Routes extends Component{

	componentDidMount(){
		return(
			<Route exact path="/" render={() =>(
				this.props.authed ? (
					<Redirect to="/home"/>
				) : (
					<Login/>
				)
			)}/>
		)
	}

	render(){
		return(
			<div>
				{this.componentDidMount()}
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

function mapDispatchToProps(dispatch){
	return {
		userAuthed
	}
}


const LoginContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
export default LoginContainer