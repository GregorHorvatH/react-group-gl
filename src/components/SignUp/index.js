import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../redux/sessionOperations';

const SignUp = ({ signIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    signIn();
  };

  return (
    <div className="log-in">
      <h3>SignIn page</h3>

      <form className="login-form" onSubmit={handleSubmit}>
        <label className="label-wrapper">
          <span className="label">Name</span>
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="label-wrapper">
          <span className="label">Email</span>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="label-wrapper">
          <span className="label">Password</span>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="button" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default connect(null, { signIn: signUp })(SignUp);
