import React from 'react';

const UserAdminView = ({ email, friends, _id: id }) => (
  <div key={id}>
    <div>
      {email}
    </div>
    <h4>Connections</h4>
    <div>
      {friends.length > 0 && friends.map((friend) => (
        <div>{friend}</div>   
      ))}
    </div>
  </div>
);

export default UserAdminView;
