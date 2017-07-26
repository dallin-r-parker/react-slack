import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Messages.css'
import Header from '../Header/Header'
import ChatInput from '../ChatInput/ChatInput'
import io from 'socket.io-client'
import {updateInput} from '../../redux/actions/messageActions'


class Messages extends Component{
	constructor(props){
		super(props)
		this.handleChat = this.handleChat.bind(this)
	}

	handleChat(value){
		this.props.updateInput(value)
	}

	render(){
		const socket = io()
		return(
			<div className="message-warp">
				<Header/>
				<ChatInput action={this.handleChat}/>
			</div>
		)
	}
}

function mapStateToProps({messageReducer}) {
	console.log(messageReducer)
	return {
		message: messageReducer.message,
		messages: messageReducer.messages
	}
}
export default connect(mapStateToProps, {updateInput})(Messages)