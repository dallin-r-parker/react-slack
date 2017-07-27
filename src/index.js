import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import './index.css'
import LoginCheck from './Routes/LoginCheck'
import RegisterCheck from './Routes/RegisterCheck'
import App from './App'

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<Switch>
				<Route exact path="/" component={LoginCheck}/>
				<Route path="/register" component={RegisterCheck}/>
				<Route path="/home" component={App}/>
			</Switch>
		</Provider>
	</HashRouter>,
	document.getElementById('root'))

