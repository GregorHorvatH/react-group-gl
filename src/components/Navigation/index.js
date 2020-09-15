import React from 'react';

const Navigation = () => (
  <div className="navigation">
    <a className="link active-link" href="/" aria-current="page">
      Home
    </a>
    <a className="link" href="/users-page">
      Users
    </a>
    <a className="link" href="/home-works">
      Home Works
    </a>
    <a className="link" href="/about">
      About
    </a>
  </div>
);

export default Navigation;
