import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h3>404</h3>

    {/* <a href="/">Go Home</a> */}
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;
