import React from 'react'
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
			<h3>Enter your username & password</h3>
				<input onChange={handleEmail}
				       type="email"
				       placeholder="email"/>

				<input onChange={handlePw}
				       type="password"
				       placeholder="password"/>

				<button onClick={handleLogin}>Continue</button>
		</section>
	)
}