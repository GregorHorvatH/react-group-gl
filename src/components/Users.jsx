import React from 'react';
import User from './User';

const Users = ({ users }) => (
  <div>
    <h2>Users</h2>
    {users.map((item) => (
      <User key={item.id} user={item} />
    ))}
  </div>
);

export default Users;
