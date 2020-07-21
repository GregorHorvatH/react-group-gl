import React, { useState } from 'react';

const SignUpForm = ({ onSubmit }) => {
  const [name, setName] = useState('User Two');
  const [email, setEmail] = useState('user2@gmail.com');
  const [password, setPassword] = useState('1234567');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ name, email, password });
  };

  return (
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
  );
};

export default SignUpForm;
