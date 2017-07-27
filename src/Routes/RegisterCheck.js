import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'
import Register from '../components/Login/Register/Register'

class RegisterCheck extends Component{

	componentDidMount(){
		return(
			<Route path="/register" render={() =>(
				this.props.created ? (
					<Redirect to="/"/>
				) : (
					<Register/>
				)
			)}/>
		)
	}

	render(){
		return(
			<div>
				{this.componentDidMount()}
			</div>
		)
	}
}

function mapStateToProps({registerReducer}) {
	return {
		created: registerReducer.created
	}
}


export default connect(mapStateToProps)(RegisterCheck);