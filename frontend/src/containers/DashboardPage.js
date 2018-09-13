import React, { Component } from 'react';

import { UsersList } from '../components';
import { Button } from '../components/base';
import { logoutFlow } from '../use-cases/auth';

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  logout() {
    if (logoutFlow()) {
      this.props.history.push('/');
    }
  }

  async onClick() {
    if (logoutFlow()) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div>
        DASHBOARD

        <Button
          action='submit'
          form='logout'
          onClick={this.onClick}
          title='Logout'
          type='submit'
        />
        <UsersList />
      </div>
    );
  }
}

export default DashboardPage;
