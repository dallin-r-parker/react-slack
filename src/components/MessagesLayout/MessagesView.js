import React, {Component} from 'react'
import {connect} from 'react-redux'
import './MessagesView.css'
import Header from '../Header/Header'
import ChatInput from './ChatInput/ChatInput'
import Messages from './Messages'
import io from 'socket.io-client'
import {updateInput} from '../../redux/actions/messageActions'
import './MessagesView.css'
const socket = io()

class MessagesLayout extends Component {
	constructor(props) {
		super(props)

		this.handleChat = this.handleChat.bind(this)
		this.sendMessage = this.sendMessage.bind(this)
	}
	
	componentDidMount(){
		socket.on('user_connected', data => {
			console.log('didMOunt', data)
		})
	}

	handleChat(value) {
		this.props.updateInput(value)
	}

	sendMessage(e){
		if(e === 13){
			socket.emit('chat_message', {message: this.props.message})
			socket.on('chat_message', data => {
				console.log(data)
			})
		}
	}
	


	render() {

		return (
			<div className="message-wrap">
				<Header/>
				<div className="message-container">
					<Messages/>
					<Messages/>
					<Messages/>
					<Messages/>
					<Messages/>
					<Messages/>
				</div>
				<ChatInput update={this.handleChat}
				           action={this.sendMessage}/>
			</div>
		)
	}
}

function mapStateToProps({messageReducer}) {

	return {
		message: messageReducer.message,
		messages: messageReducer.messages
	}
}

export default connect(mapStateToProps, {updateInput})(MessagesLayout)