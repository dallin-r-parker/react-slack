import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import './index.css';
import App from './App';
import Login from './components/Login/Login'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<div>
				<Route exact path="/" component={Login}/>
				<Route path="/home" component={App}/>
			</div>
		</HashRouter>
	</Provider>,
	document.getElementById('root'));
	registerServiceWorker();
