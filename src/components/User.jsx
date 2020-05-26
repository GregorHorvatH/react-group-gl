import React from 'react';
import { string, number, shape } from 'prop-types';

const User = ({ user }) => (
  <div>
    <h2>User</h2>
    <p>Firstname: {user.firstName}</p>
    <p>Lastname: {user.lastName}</p>
    <p>Age: {user.age}</p>
  </div>
);

User.propTypes = {
  user: shape({
    firstName: string,
    lastName: string,
    age: number,
  }),
};

User.defaultProps = {
  user: {},
};

export default User;
