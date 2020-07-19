import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignUpForm from '../SignUpForm';
import { signUp } from '../../redux/sessionOperations';

const SignUp = ({ onSignUp }) => (
  <div className="log-in">
    <h3>Sign Up Page</h3>

    <SignUpForm onSubmit={onSignUp} />

    <p className="center">
      or <Link to="/login">Log In</Link>
    </p>
  </div>
);

export default connect(null, { onSignUp: signUp })(SignUp);
