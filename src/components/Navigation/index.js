import React from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../../routes';

const Navigation = () => (
  <div className="navigation">
    <NavLink
      className="link"
      activeClassName="active-link"
      to={routes.HOME}
      exact
    >
      Home
    </NavLink>
    <NavLink className="link" activeClassName="active-link" to={routes.USERS}>
      Users
    </NavLink>
    <NavLink
      className="link"
      activeClassName="active-link"
      to={routes.HOME_WORKS}
    >
      Home Works
    </NavLink>
    <NavLink className="link" activeClassName="active-link" to={routes.ABOUT}>
      About
    </NavLink>
  </div>
);

export default Navigation;
