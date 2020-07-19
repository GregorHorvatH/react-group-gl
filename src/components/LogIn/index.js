import React from 'react';
import { connect } from 'react-redux';
import LogInForm from '../LogInForm';
import { logIn } from '../../redux/sessionOperations';

const LogIn = ({ logIn }) => {
  const handleSubmit = (data) => {
    logIn(data);
  };

  return (
    <div className="log-in">
      <h3>LogIn page</h3>

      <LogInForm onSubmit={handleSubmit} />
    </div>
  );
};

export default connect(null, { logIn })(LogIn);
