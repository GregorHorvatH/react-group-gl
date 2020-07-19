import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { signIn } from '../../redux/sessionOperations';

import withAuth from '../../hoc/withAuth';

const SignIn = ({ signIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    signIn();
  };

  return (
    <div className="log-in">
      <h3>SignIn page</h3>

      <form onSubmit={handleSubmit}>
        <button className="button" onClick={handleSubmit}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default compose(connect(null, { signIn }), withAuth(false))(SignIn);
