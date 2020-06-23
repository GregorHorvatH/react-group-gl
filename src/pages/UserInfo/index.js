import React, { useContext } from 'react';

import UserContext from '../../context/UserContext';

const UserInfo = () => {
  const { user } = useContext(UserContext);

  return user ? (
    <div className="user-info">
      <h3>User Info</h3>
      <h4>{user.name}</h4>
      <p>age: {user.age}</p>
    </div>
  ) : (
    <h4>No User Data</h4>
  );
};

export default UserInfo;
