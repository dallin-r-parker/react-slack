import React, {Component} from 'react'
import {connect} from 'react-redux'
import './MessagesView.css'
import Header from '../Header/Header'
import ChatInput from '../ChatInput/ChatInput'
import Messages from './Messages'
import io from 'socket.io-client'
import {updateInput} from '../../redux/actions/messageActions'
import './MessagesView.css'
const socket = io()

class MessagesLayout extends Component {
	constructor(props) {
		super(props)

		this.handleChat = this.handleChat.bind(this)
	}

	handleChat(value) {
		this.props.updateInput(value)
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
				<ChatInput action={this.handleChat}/>
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