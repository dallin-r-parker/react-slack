import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './Login.css'
import LoginHeader from '../LoginHeader/LoginHeader'
import LoginInput from '../LoginInput/LoginInput'
import {addEmail, addPw} from '../../../redux/actions/loginActions'


class Login extends Component{
	constructor(props){
		super(props)

		this.handleEmail = this.handleEmail.bind(this)
		this.handlePassword = this.handlePassword.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
	}

	handleEmail = (e) => (this.props.addEmail(e))

	handlePassword = (e) => (this.props.addPw(e))

	handleLogin(){
		const {email, password} = this.props

		axios({
			method:'POST',
			url: 'http://localhost:8080/api/login',
			data: {email, password}
		}).then(res => console.log(res))
			.catch(err => console.log(err))
	}

	render(){
		return(
			<section className="login-main-container">
				<LoginHeader/>
				<div className="input-component-wrap">
					<LoginInput email={this.handleEmail}
					            password={this.handlePassword}
					            login={this.handleLogin}/>
				</div>
			</section>
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

export default connect(mapStateToProps, {addEmail, addPw})(Login)