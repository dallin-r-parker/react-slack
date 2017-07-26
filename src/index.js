import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import './index.css'
import LoginContainer from './Routes'
import App from './App'

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<Switch>
				<Route exact path="/" component={LoginContainer}/>
				<Route path="/home" component={App}/>
			</Switch>
		</Provider>
	</HashRouter>,
	document.getElementById('root'))

