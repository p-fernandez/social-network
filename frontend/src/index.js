
import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router-dom'
import './index.css';
import Api from './http/Api';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  DashboardPage,
  LoginPage,
  RegisterPage,
} from './containers';
import { PrivateRoute } from './components';

require('dotenv').config();

Api.initialize({
  baseUrl: process.env.REACT_APP_BACKEND_URL,
  timeout: process.env.REACT_APP_TIMEOUT,
});

const history = createBrowserHistory()

const Root = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/login' component={LoginPage} />
      <Route path='/register' component={RegisterPage} />
      <PrivateRoute path='/dashboard' component={DashboardPage} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
