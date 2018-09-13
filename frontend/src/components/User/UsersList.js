import React, { Component } from 'react';

import User from './User';
import UserAdminView from './UserAdminView';

import { getUsersFlow } from '../../use-cases/get-users';
import { updateConnectionFlow } from '../../use-cases/connections';
import {
  isAdminFlow,
} from '../../use-cases/auth';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isAdmin: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  async onClick(event, id, form) {
    const { profileViewer } = this.props;
    const { _id: viewerId } = profileViewer;
    const updated = await updateConnectionFlow(form, viewerId, id);
    const isError = updated.errorMessage ? true : false;
    const users = await getUsersFlow();

    if (isError) {
      this.setState({
        error: updated,
        users,
      });  
    } else if (users.length > 0) {
      this.props.onChange();
    } else {
      this.setState({
        error: users,
        users: [],
      });
    }
  }

  async componentDidMount() {
    this.setState({
      error: null,
      isAdmin: isAdminFlow(),
    });
  }

  renderAdmin(users) {
    return users.length > 0 && users.map((user) => <UserAdminView key={user._id} {...user} />);
  }

  renderUsers(users, profileViewer) {
    if (users.length > 0) {
      return users.filter(user => user._id !== profileViewer._id)
        .map((user) => {
          const isConnected = profileViewer.friends.includes(user._id);
          return (
            <User
              key={user._id}
              {...user}
              isConnected={isConnected}
              onClick={this.onClick}
              viewerId={profileViewer._id}
            />
          );
        });
    }

    return null;
  }

  render() {
    const { isAdmin } = this.state;
    const { profileViewer, users } = this.props;

    if (isAdmin) {
      return this.renderAdmin(users);
    }
    
    return this.renderUsers(users, profileViewer);
  }
}

export default UsersList;
