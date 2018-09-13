import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { checkAuthenticationFlow } from './use-cases/auth';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
    };
  }

  render() {
    const authenticated = checkAuthenticationFlow();
    return (
      <Route exact path="/" render={() => (
        authenticated ? (
          <Redirect to="/dashboard"/>
        ) : (
          <Redirect to="/login"/>
        ))} 
      />
    );
  }
}

export default App;
