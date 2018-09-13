import React from 'react';

import {
  ChangeView,
  Login,
} from '../components';

const LoginPage = () => (
  <div>
    <Login />
    <ChangeView
      action='Register'
      title='Need an account? Please register.'
      to='/register'
    />
  </div>
);

export default LoginPage;
