import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LogInForm from '../LogInForm';
import { logIn } from '../../redux/session/sessionOperations';

const LogIn = ({ onLogin }) => (
  <div className="log-in">
    <h3>Log In Page</h3>

    <LogInForm onSubmit={onLogin} />

    <p className="center">
      or <Link to="/signup">Sign Up</Link>
    </p>
  </div>
);

export default connect(null, { onLogin: logIn })(LogIn);
