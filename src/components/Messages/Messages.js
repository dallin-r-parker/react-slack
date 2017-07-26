import React, {Component} from 'react'
import './Messages.css'
import Header from '../Header/Header'
import ChatInput from '../ChatInput/ChatInput'
import io from 'socket.io-client'


class Messages extends Component{
	constructor(props){
		super(props)
	}

	render(){
		const socket = io()
		console.log(socket)
		return(
			<div className="message-warp">
				<Header/>
				<ChatInput/>
			</div>
		)
	}
}

export default Messages