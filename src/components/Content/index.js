import React, { Suspense, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from '../Loader';

import UserContext from '../../context/UserContext';

const Content = ({ routes }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="content">
      <Switch>
        <Suspense fallback={<Loader />}>
          {routes.map(({ path, exact, component, needsAuth }) =>
            (needsAuth && user) || !needsAuth ? (
              <Route
                key={path}
                path={path}
                exact={exact}
                component={component}
              />
            ) : null,
          )}
        </Suspense>
      </Switch>
    </div>
  );
};

export default Content;
