import React from 'react';

import './User.styles.scss';

const Users = ({ match }) => {
  return (
    <div className="users">
      <h3>Users Page</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        sapiente, eius illo voluptatem tempora minima cupiditate quidem dolorum
        reiciendis quasi pariatur iusto distinctio! Debitis velit voluptatum
        exercitationem at ipsa quaerat?
      </p>
      <div className="user-list">
        <a href="/users/1">User 1</a>
        <a href="/users/2">User 2</a>
        <a href="/users/3">User 3</a>
      </div>
    </div>
  );
};

export default Users;
