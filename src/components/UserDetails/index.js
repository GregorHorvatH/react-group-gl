import React, { useEffect, useState } from 'react';

const UserDetails = ({ match, history }) => {
  const [user, setUser] = useState();
  // const { userId } = match.params;
  const userId = 'a1da4d77-bb2e-4909-86cf-4960ee3a0160';

  const handleGoBack = () => {
    window.history.back();
  };

  useEffect(() => {
    fetch(`http://localhost:8080/users/${userId}`)
      .then((res) => res.json())
      .then(setUser);
  }, [userId]);

  const { name = {}, picture = {}, email } = user || {};

  return user ? (
    <div className="user-details">
      <h3>{`${name.title} ${name.first} ${name.last}`}</h3>
      <img src={picture.large} alt="" />
      <p>{email}</p>
      <button onClick={handleGoBack}>&#60;</button>
    </div>
  ) : null;
};

export default UserDetails;
