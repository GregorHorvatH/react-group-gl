import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Loader from '../Loader';
import routes from '../routes';

const Content = ({ isAuthorized }) => {
  return (
    <div className="content">
      <Switch>
        <Suspense fallback={<Loader />}>
          {routes.map(({ path, exact, component, needsAuth }) =>
            // (
            //   <Route
            //     key={path}
            //     path={path}
            //     exact={exact}
            //     component={component}
            //   />
            // ),

            needsAuth && !isAuthorized ? (
              <PrivateRoute
                key={path}
                path={path}
                isAuthorized={isAuthorized}
                component={component}
              />
            ) : (
              <Route
                key={path}
                path={path}
                exact={exact}
                component={component}
              />
            ),
          )}
        </Suspense>
      </Switch>
    </div>
  );
};

const mapDispatchToProps = ({ session: { isAuthorized } }) => ({
  isAuthorized,
});

export default connect(mapDispatchToProps)(Content);
