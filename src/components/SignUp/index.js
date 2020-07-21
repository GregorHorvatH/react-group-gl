import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignUpForm from '../SignUpForm';
import { signUp } from '../../redux/sessionOperations';

const SignUp = ({ isAuthorized, error, onSignUp, history }) => {
  useEffect(() => {
    if (!isAuthorized) {
      return;
    }

    history.replace('/');
  }, [isAuthorized, history]);

  return (
    <div className="log-in">
      <h3>Sign Up Page</h3>

      <SignUpForm onSubmit={onSignUp} />
      <h4 className="center">{error}</h4>

      <p className="center">
        or <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

const mapStateToProps = ({ session: { isAuthorized, error } }) => ({
  isAuthorized,
  error,
});

export default connect(mapStateToProps, { onSignUp: signUp })(SignUp);
