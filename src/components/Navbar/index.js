import React from 'react';

import Navigation from '../Navigation';
import Authorization from '../Authorization';

const Navbar = ({ routes }) => (
  <div className="navbar">
    <Navigation routes={routes} />
    <Authorization />
  </div>
);

export default Navbar;
