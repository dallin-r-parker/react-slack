import React from 'react'
import './ChatInput.css'

export default function ChatInput(props) {
	return (
			<div className="chat-wrap">
				<i className="fa fa-plus" aria-hidden="true">{/* */}</i>
				<input type="text" placeholder="type here..."/>
			</div>
	)
}