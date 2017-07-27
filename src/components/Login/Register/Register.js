import React, {Component} from 'react'
import LoginHeader from '../LoginHeader/LoginHeader'
import RegisterInput from '../RegisterInput/RegisterInput'
import './Register.css'

export  default class Register extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="register-container">
				<LoginHeader/>
				<div className="register-input-wrap">
					<RegisterInput/>
				</div>
			</div>
		)
	}
}
