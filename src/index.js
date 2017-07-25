import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import './index.css'
import App from './App'
import Login from './components/Login/Login/Login'
import Root from './Root'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
				<div>
					<Route exact path="/" component={Root}/>
					<Switch>
						<Route exact path="/home" component={App}/>
					</Switch>
					<Switch>
						<Route exact path="/login" component={Login}/>
					</Switch>
				</div>
		</HashRouter>
	</Provider>,
	document.getElementById('root'))
registerServiceWorker()

