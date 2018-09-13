import React, { Component } from 'react';

import { Button } from '../base';
import { updateConnectionFlow } from '../../use-cases/connections';

const capitalizeFirstChar = str => str.charAt(0).toUpperCase() + str.substring(1);

class User extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event, id, form) {
    const { viewerId } = this.props;
    return updateConnectionFlow(form, viewerId, id);
  }

  render() {
    const {
      email,
      friends,
      _id: id,
      isAdmin,
      viewerId,
    } = this.props;

    console.log(friends, viewerId, id);
    console.log(friends.includes(viewerId));
    const action = friends.includes(viewerId) ? 'remove' : 'add';

    return (
      <div key={id}>
        <div>
          {email}
          <Button
            action={action}
            form='users'
            onClick={event => this.onClick(event, id, action)}
            title={capitalizeFirstChar(action)}
            type='submit'
          />
        </div>
        <div>
          {isAdmin && friends.length > 0 &&
            'LOL'}
        </div>
      </div>
    );
  }
}

export default User;
