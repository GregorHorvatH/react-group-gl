import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LogInForm from '../LogInForm';
import { logIn } from '../../redux/sessionOperations';

const LogIn = ({ isAuthorized, onLogin, history }) => {
  useEffect(() => {
    if (!isAuthorized) {
      return;
    }

    history.replace('/');
  }, [isAuthorized, history]);

  return (
    <div className="log-in">
      <h3>Log In Page</h3>

      <LogInForm onSubmit={onLogin} />

      <p className="center">
        or <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

const mapStateToProps = ({ session: { isAuthorized } }) => ({ isAuthorized });

export default connect(mapStateToProps, { onLogin: logIn })(LogIn);
