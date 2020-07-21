import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux/sessionOperations';

const Authorization = ({ isAuthorized, user, logOut }) => {
  return isAuthorized ? (
    <div className="authorization">
      <img
        className="avatar"
        // src={process.env.PUBLIC_URL + user.avatar}
        src="/img/avatar.jpeg"
        alt="avatar"
      />
      <span className="user-name">{user.name}</span>
      <button className="button" onClick={() => logOut()}>
        Log Out
      </button>
    </div>
  ) : (
    <div className="buttons">
      <Link className="button log-in" to="/login">
        Log In
      </Link>
      <Link className="button sign-up" to="/signup">
        Sign Up
      </Link>
    </div>
  );
};

const mapStateToProps = ({ session: { isAuthorized, user } }) => ({
  isAuthorized,
  user,
});

const mapDispatchToProps = {
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
