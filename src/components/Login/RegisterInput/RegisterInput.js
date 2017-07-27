import React from 'react'
import './RegisterInput.css'

export default function RegisterInput(props) {

	return(
		<section className="register-input">
			<h1>Sign Up</h1>
			<h3>Enter in applicable information</h3>
			<input type="text" placeholder="first name"/>
			<input type="text" placeholder="last name"/>
			<input type="text" placeholder="email"/>
			<input type="text" placeholder="password"/>
			<button>Submit</button>
			<button>Cancel</button>
		</section>
	)
}