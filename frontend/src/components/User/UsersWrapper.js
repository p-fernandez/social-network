import React, { Component } from 'react';

import UsersList from './UsersList';

import { ErrorBar } from '../base';
import { getUsersFlow } from '../../use-cases/get-users';
import { getProfileViewerIdFlow } from '../../use-cases/user';
import {
  getIdFlow,
} from '../../use-cases/auth';

class UsersWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      users: [],
    };

    this.onChange = this.onChange.bind(this);
  }

  async onChange() {
    const viewerId = getIdFlow();
    const users = await getUsersFlow();
    const profileViewer = getProfileViewerIdFlow(viewerId, users);
    this.setState({
      profileViewer,
      users,
      error: null,
    });
  }

  async componentDidMount() {
    const viewerId = getIdFlow();
    const users = await getUsersFlow();
    const profileViewer = getProfileViewerIdFlow(viewerId, users);
    if (users.length) {
     this.setState({
        profileViewer,
        users,
        error: null,
      });
    } else {
      this.setState({
        profileViewer,
        users: [],
        error: users,
      });

    }
  }

  render() {
    const { error, profileViewer, users } = this.state;
    return (
      <div>
        <UsersList
          onChange={this.onChange}
          profileViewer={profileViewer}
          users={users} />
        {error && <ErrorBar error={error} />}
      </div>
    );
  }
}

export default UsersWrapper;
