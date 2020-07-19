import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Navigation = ({ isAuthorized }) => {
  return (
    <div className="navigation">
      {routes.map(
        ({ label, path, exact, needsAuth, showInMenu }) => (
          // showInMenu && ((needsAuth && isAuthorized) || !needsAuth) ? (
          <NavLink
            className="link"
            activeClassName="active"
            to={path}
            exact={exact}
            key={path}
          >
            {label}
          </NavLink>
        ),
        // ) : null,
      )}
    </div>
  );
};

const mapStateToProps = ({ session: { isAuthorized } }) => ({
  isAuthorized,
});

export default connect(mapStateToProps)(Navigation);
