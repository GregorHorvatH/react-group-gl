import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: InputComponent, isAuthorized, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      isAuthorized ? (
        <InputComponent />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
