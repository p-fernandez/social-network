import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { checkAuthenticationFlow } from '../../use-cases/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuthenticationFlow() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
