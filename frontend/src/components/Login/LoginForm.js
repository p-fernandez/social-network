import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import { Button, ErrorBar, Input } from '../base';
import { loginFlow } from '../../use-cases/login';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null,
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(name, event) {
    this.setState({
      [name]: event.target.value,
    });
  }

  async onClick() {
    const { email, password } = this.state;
    const loggedIn = await loginFlow(email, password); 
    if (loggedIn === true) {
      this.props.history.push('/dashboard');
    } else {
      this.setState({ error: loggedIn });  
    }
  }

  render() {
    const { error } = this.state;
    return (
      <Fragment>
        <Input
          label='Email'
          name='email'
          onChange={this.onChange}
          type='text'
        />
        <Input
          label='Password'
          name='password'
          onChange={this.onChange}
          placeholder='* * *'
          type='password'
        />
        <Button
          action='submit'
          form='login'
          onClick={this.onClick}
          title='Login'
          type='submit'
        />
        {error && <ErrorBar error={error} />}
      </Fragment>
    )
  }
}

export default withRouter(LoginForm);
