import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'
import Login from '../components/Login/Login/Login'

class LoginCheck extends Component{

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
		authed: loginReducer.authed
	}
}


export default connect(mapStateToProps)(LoginCheck);