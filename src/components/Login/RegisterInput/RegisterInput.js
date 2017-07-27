import React from 'react'
import './RegisterInput.css'
import {Link} from 'react-router-dom'

export default function RegisterInput(props) {
	function handleFirst(e) {
		props.first(e.target.value)
	}

	function handleLast(e) {
		props.last(e.target.value)
	}

	function handleEmail(e) {
		props.email(e.target.value)
	}

	function handlePw(e) {
		props.password(e.target.value)
	}

	function handleSubmit(e) {
		props.submit(e)
	}

	return (
		<section className="register-input">
			<h1>Sign Up</h1>
			<h3>Enter in your information</h3>
			<input placeholder="first name"
			       onChange={handleFirst}/>
			<input placeholder="last name"
			       onChange={handleLast}/>
			<input placeholder="email"
			       onChange={handleEmail}/>
			<input placeholder="password"
			       type="password"
			       onChange={handlePw}/>
			<button onClick={handleSubmit}>Submit</button>
			<button><Link to="/">Cancel</Link></button>
		</section>
	)
}