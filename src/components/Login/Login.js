import React, {Component} from 'react'
import {connect} from 'react-redux'


class Login extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<h1>Hello</h1>
		)
	}
}

function mapStateToProps({loginReducer}) {
	return {
		email: loginReducer.email,
		password: loginReducer.password
	}
}

export default connect(mapStateToProps)(Login)