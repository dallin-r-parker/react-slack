import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Login.css'
import LoginHeader from '../LoginHeader/LoginHeader'
import LoginInput from '../LoginInput/LoginInput'
import {addEmail, addPw, userAuthed} from '../../../redux/actions/loginActions'
import {updateAccount} from '../../../redux/actions/registerActions'

class Login extends Component {
	constructor(props) {
		super(props)

		this.handleEmail = this.handleEmail.bind(this)
		this.handlePassword = this.handlePassword.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
	}

	handleEmail = (e) => (this.props.addEmail(e))
	handlePassword = (e) => (this.props.addPw(e))

	handleLogin() {
		const {email, password} = this.props
		const user = Object.assign({}, {email, password})
		this.props.userAuthed(user)
	}


	render() {
		return (
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

function mapStateToProps({loginReducer, registerReducer}) {
	return {
		email: loginReducer.email,
		password: loginReducer.password,
		authed: loginReducer.authed,
		created: registerReducer.created
	}
}

export default connect(mapStateToProps,
	{addEmail, addPw, userAuthed, updateAccount})(Login)