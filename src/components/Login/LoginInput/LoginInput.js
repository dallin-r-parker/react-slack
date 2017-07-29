import React from 'react'
import {Link} from 'react-router-dom'
import './LoginInput.css'


export default function LoginInput(props) {
	

	function handleEmail(e) {
		props.email(e.target.value)
	}

	function handlePw(e) {
		props.password(e.target.value)
	}

	function handleLogin() {
		props.login()
	}

	return(
		<section className="input-container">
			<h1>Sign in to your team</h1>
			<h3>Enter your email & password</h3>
				<input onChange={handleEmail}
				       //style={{border: invalid ? '1px solid rgb(239, 57, 0)' : null}}
				       type="email"
				       placeholder="email"/>

				<input onChange={handlePw}
				       //style={{border: invalid ? '1px solid rgb(239, 57, 0)' : null}}
				       type="password"
				       placeholder="password"/>

				<button onClick={handleLogin}>Continue</button>
			<button><Link to="/register">Register</Link></button>
		</section>
	)
}