import React from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(UserInfo);
