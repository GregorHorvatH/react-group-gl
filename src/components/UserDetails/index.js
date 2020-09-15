import React, { useEffect, useState } from 'react';

const UserDetails = ({ match, location, history }) => {
  const [user, setUser] = useState();
  const { userId } = match.params;

  const handleGoBack = () => {
    history.push({
      pathname: location.state.url || '/',
      search: `?filter=${location.state.filter}`,
    });
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
