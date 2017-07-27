import React from 'react'
import './Messages.css'

export default function Messages(props) {
	return (
		<div className="message-content">
			<p>{props.time}</p>
			<p>{props.user}</p>
			<p>{props.message}</p>
		</div>
	)

}