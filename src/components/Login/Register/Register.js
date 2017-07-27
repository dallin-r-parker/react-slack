import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import LoginHeader from '../LoginHeader/LoginHeader'
import RegisterInput from '../RegisterInput/RegisterInput'
import {updateFirst, updateLast, updateEmail, updatePW} from '../../../redux/actions/registerActions'
import './Register.css'

class Register extends Component {
	constructor(props) {
		super(props)
		this.handleFirst = this.handleFirst.bind(this)
		this.handleLast = this.handleLast.bind(this)
		this.handleEmail = this.handleEmail.bind(this)
		this.handlePw = this.handlePw.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		console.log("constructor: ",props)
	}
	componentDidMount(){
		this.handleSubmit()
	}

	handleFirst(value) {
		this.props.updateFirst(value)
	}

	handleLast(value) {
		this.props.updateLast(value)
	}

	handleEmail(value) {
		this.props.updateEmail(value)
	}

	handlePw(value) {
		this.props.updatePW(value)
	}

	handleSubmit() {
		const {first, last, email, password} = this.props
		const newUser = Object.assign({}, {first, last, email, password})

		
		console.log(newUser)
	}

	render() {
		return (
			<div className="register-container">
				<LoginHeader/>
				<div className="register-input-wrap">
					<RegisterInput
						first={this.handleFirst}
						last={this.handleLast}
						email={this.handleEmail}
						password={this.handlePw}
						submit={this.handleSubmit}/>
				</div>
			</div>
		)
	}
}

function mapStateToProps({registerReducer, loginReducer}) {
	return{
		first: registerReducer.first,
		last: registerReducer.last,
		email: registerReducer.email,
		password: registerReducer.password
	}
}

export default connect(mapStateToProps, {updateFirst, updateLast, updateEmail, updatePW})(Register)