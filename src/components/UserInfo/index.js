import React from 'react';
import { connect } from 'react-redux';
// import { compose } from 'recompose';
// import withAuth from '../../hoc/withAuth';
import { getContacts } from '../../redux/sessionOperations';

const UserInfo = ({ user, getContacts }) => {
  return user ? (
    <div className="user-info">
      <h3>User Info</h3>
      <h4>{user.name}</h4>
      <p>age: {user.age}</p>

      <button onClick={() => getContacts()}>Get Contacts</button>
    </div>
  ) : (
    <h4>No User Data</h4>
  );
};

const mapStateToProps = ({ session: { user } }) => ({
  user,
});

// export default withAuth(connect(mapStateToProps))(UserInfo);
// export default compose(connect(mapStateToProps), withAuth(true))(UserInfo);
export default connect(mapStateToProps, { getContacts })(UserInfo);
