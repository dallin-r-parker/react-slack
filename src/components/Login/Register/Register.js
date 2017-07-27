import React, {Component} from 'react'
import LoginHeader from '../LoginHeader/LoginHeader'
import RegisterInput from '../RegisterInput/RegisterInput'
import './Register.css'

export  default class Register extends Component{
	constructor(props){
		super(props)

		this.handleFirst = this.handleFirst.bind(this)
		this.handleLast = this.handleLast.bind(this)
		this.handleEmail = this.handleEmail.bind(this)
		this.handlePw = this.handlePw.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleFirst(value){
		console.log("First2: ", value)
	}

	handleLast(value){
		console.log("Last2: ", value)
	}

	handleEmail(value){
		console.log("Email2: ", value)
	}

	handlePw(value){
		console.log("PW2: ", value)
	}

	handleSubmit(){

	}

	render(){
		return(
			<div className="register-container">
				<LoginHeader/>
				<div className="register-input-wrap">
					<RegisterInput
						first={this.handleFirst}
						last={this.handleLast}
						email={this.handleEmail}
						password={this.handlePw}/>
				</div>
			</div>
		)
	}
}
