import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuth from '../../hoc/withAuth';

const UserInfo = ({ user }) => {
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

const mapStateToProps = ({ session: { user } }) => ({
  user,
});

export default compose(connect(mapStateToProps), withAuth(true))(UserInfo);
