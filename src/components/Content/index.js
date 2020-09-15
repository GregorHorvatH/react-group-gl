import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from '../NotFound';

import routes from '../../routes';

const Content = () => (
  <div className="content">
    <h1>Lesson 05, Routing & Code Splitting</h1>

    <Switch>
      {routes.map(({ path, isExact, component: Component }) => (
        <Route path={path} exact={isExact} component={Component} key={path} />
        // <Route
        //   path={path}
        //   exact={isExact}
        //   render={(props) => {
        //     console.log('props:', props);

        //     return <Component />;
        //   }}
        //   key={path}
        // />
      ))}

      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Content;
