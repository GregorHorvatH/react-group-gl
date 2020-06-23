import React, { useContext } from 'react';

import UserContext from '../../context/UserContext';

const Authorization = () => {
  const { user, onLogIn, onLogOut } = useContext(UserContext);

  return user ? (
    <div className="authorization">
      <img
        className="avatar"
        src={process.env.PUBLIC_URL + user.avatar}
        alt="avatar"
      />
      <span className="user-name">{user.name}</span>
      <button className="button" onClick={onLogOut}>
        Log Out
      </button>
    </div>
  ) : (
    <button className="button" onClick={onLogIn}>
      Log In
    </button>
  );
};

export default Authorization;
