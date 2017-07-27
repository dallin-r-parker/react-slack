import React, {Component} from 'react'
import {connect} from 'react-redux'
import io from 'socket.io-client'
import moment from 'moment'
import Header from '../Header/Header'
import ChatInput from './ChatInput/ChatInput'
import Messages from './Messages'
import './MessagesView.css'
import {updateInput, updateMessages} from '../../redux/actions/messageActions'
const socket = io()

class MessagesLayout extends Component {
	constructor(props) {
		super(props)

		this.connectUser = this.connectUser.bind(this)
		this.handleChatMessage = this.handleChatMessage(this)
		this.handleChatUpdate = this.handleChatUpdate.bind(this)
		this.sendMessage = this.sendMessage.bind(this)

	}
	
	componentDidMount(){
		const user = 'Kayda'
		socket.emit('user_connected', user)
		this.connectUser()

	}

	connectUser(){
		socket.on('user_connected', data => {
			console.log('this user connected', data)
		})
	}

	handleChatMessage(){
		socket.on('chat_message', data => {
			const time = moment().format('h:mm A')
			const newMessage = {time: time, message:data, user: 'Dallin Parker'}
			this.props.updateMessages(newMessage)
		})
	}

	handleChatUpdate(value) {
		this.props.updateInput(value)
	}

	sendMessage(e){
		if(e === 13){
			socket.emit('chat_message', {message: this.props.message})
		}
	}

	


	render() {
		const messages = this.props.messages.map((e, i) => {
			return <Messages key={i}
			                 message={e.message.message}
			                 user={e.user}
			                 time={e.time}/>
		})
		return (
			<div className="message-wrap">
				<Header/>
				<div className="message-container">
					{messages}
				</div>
				<ChatInput update={this.handleChatUpdate}
				           action={this.sendMessage}/>
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

export default connect(mapStateToProps, {updateInput, updateMessages})(MessagesLayout)