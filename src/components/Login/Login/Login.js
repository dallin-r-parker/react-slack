import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Login.css'
import LoginHeader from '../LoginHeader/LoginHeader'
import LoginInput from '../LoginInput/LoginInput'


class Login extends Component{
	constructor(props){
		super(props)
		console.log(props)

		this.handleEmail = this.handleEmail.bind(this)
		this.handlePassword = this.handlePassword.bind(this)
	}

	handleEmail(e){
		console.log("email: ", e)
	}

	handlePassword(e){
		console.log('password: ', e)
	}

	render(){
		return(
			<section className="login-main-container">
				<LoginHeader/>
				<div className="input-component-wrap">
					<LoginInput email={this.handleEmail}
					            password={this.handlePassword}/>
				</div>
			</section>
		)
	}
}

function mapStateToProps({loginReducer}) {
	return {
		email: loginReducer.email,
		password: loginReducer.password
	}
}

export default connect(mapStateToProps)(Login)