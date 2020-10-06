import React from 'react';
import { connect } from 'react-redux';
import { getContacts } from '../../redux/session/sessionOperations';

const UserInfo = ({ user, getContacts }) => {
  return user ? (
    <div className="user-info">
      <h3>User Info</h3>
      <h4>{user.name}</h4>
      <p>age: {user.age}</p>

      <button className="button" onClick={getContacts}>
        Get Contacts
      </button>
    </div>
  ) : (
    <h4>No User Data</h4>
  );
};

const mapStateToProps = ({ session: { user } }) => ({
  user,
});

export default connect(mapStateToProps, { getContacts })(UserInfo);
