import React from 'react'
import './LoginHeader.css'
import slackLogo from '../../../assets/slackLogo.svg'

export default function LoginHeader(props) {
	return (
		<login className="header-main-container">
			<img src={slackLogo} alt="slack-logo"/>
			<div className="login-wrap">
				<p>Register</p>
				<p>Product</p>
				<p>Pricing</p>
				<p>Support</p>
				<p>Your Team</p>
			</div>
		</login>
	)
}