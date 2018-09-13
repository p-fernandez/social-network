import React, { Component } from 'react';

import User from './User';

import { ErrorBar } from '../base';
import { getUsersFlow } from '../../use-cases/get-users';
import {
  getIdFlow,
  isAdminFlow,
} from '../../use-cases/auth';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isAdmin: false,
      users: [],
      viewerId: null,
    };
  }

  async componentDidMount() {
    const users = await getUsersFlow();

    if (users.length > 0) {
      this.setState({
        error: null,
        isAdmin: isAdminFlow(),
        users,
        viewerId: getIdFlow(),
      });
    } else {
      this.setState({
        error: users,
        isAdmin: false,
        viewerId: null,
      });  
    }
  }

  renderUsers() {
    const {
      isAdmin,
      users,
      viewerId,
    } = this.state;
    
    return users.length > 0 &&
      users
        .filter(user => user._id !== viewerId)
        .map((user) => {
          return (
            <User
              key={user._id}
              {...user}
              isAdmin={isAdmin} 
              viewerId={viewerId}
            />
          );
        });
  }

  render() {
    const { error } = this.state;
    return (
      <div>
        {this.renderUsers()}
        {error && <ErrorBar error={error} />}
      </div>
    );
  }
}

export default UsersList;
