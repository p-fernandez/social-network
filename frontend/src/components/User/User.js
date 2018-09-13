import React, { Component } from 'react';

import { Button } from '../base';

const capitalizeFirstChar = str => str.charAt(0).toUpperCase() + str.substring(1);

class User extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event, id, form) {
    this.props.onClick(event, id, form);
  }

  render() {
    const {
      email,
      friends,
      _id: id,
      isConnected,
    } = this.props;

    const action = isConnected ? 'remove' : 'add';
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
      </div>
    );
  }
}

export default User;
