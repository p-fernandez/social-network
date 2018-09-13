import React from 'react';

import {
  ChangeView,
  Register,
} from '../components';

const RegisterPage = () => (
  <div>
    <Register />
    <ChangeView
      action='Login'
      title='Already have an account? Please login.'
      to='/login'
    />
  </div>
);

export default RegisterPage;
