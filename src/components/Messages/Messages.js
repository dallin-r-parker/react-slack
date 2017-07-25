import React, {Component} from 'react'
import './Messages.css'
import Header from '../Header/Header'
import ChatInput from '../ChatInput/ChatInput'


class Messages extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="message-warp">
				<Header/>
				<ChatInput/>
			</div>
		)
	}
}

export default Messages