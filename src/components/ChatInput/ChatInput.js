import React from 'react'
import './ChatInput.css'

export default function ChatInput(props) {

	function handleInput(e){
		props.action(e.target.value)
	}
	
	return (
			<div className="chat-wrap">
				<i className="fa fa-plus" aria-hidden="true">{/* */}</i>
				<input type="text" 
				       onChange={handleInput}
				       placeholder="type here..."/>
			</div>
	)
}