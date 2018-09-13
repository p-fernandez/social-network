import React from 'react';

const UserAdminView = ({ email, friends, _id: id }) => (
  <div key={id}>
    <br/>
    <div>
      {email}
    </div>
    <div>Connections</div>
    <div>
      {friends.length > 0 && friends.map((friend) => (
        <div key={friend}>{friend}</div>   
      ))}
    </div>
    <br/>
  </div>
);

export default UserAdminView;
