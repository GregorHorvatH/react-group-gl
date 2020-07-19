import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { logIn } from '../../redux/sessionOperations';

import withAuth from '../../hoc/withAuth';

const LogIn = ({ logIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    logIn();
  };

  return (
    <div className="log-in">
      <h3>LogIn page</h3>

      <form onSubmit={handleSubmit}>
        <button className="button" onClick={handleSubmit}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default compose(connect(null, { logIn }), withAuth(false))(LogIn);
