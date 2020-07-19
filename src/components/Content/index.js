import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loader from '../Loader';
import routes from '../routes';

const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Suspense fallback={<Loader />}>
          {routes.map(({ path, exact, component }) => (
            <Route key={path} path={path} exact={exact} component={component} />
          ))}
          <Redirect to="/" />
        </Suspense>
      </Switch>
    </div>
  );
};

export default Content;
