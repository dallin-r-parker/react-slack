import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Messages.css'
import Header from '../Header/Header'
import ChatInput from '../ChatInput/ChatInput'
import io from 'socket.io-client'
import {updateInput} from '../../redux/actions/messageActions'
import './Messages.css'
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
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
					<h1>Hello</h1>
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