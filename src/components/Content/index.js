import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../Home';
import Users from '../Users';
// import UserDetails from './UserDetails';
import HomeWorks from '../HomeWorks';
import About from '../About';
import NotFound from '../NotFound';

import { routes } from '../../routes';

const Content = () => (
  <div className="body">
    <h1>Lesson 07 - Routing</h1>
    <Switch>
      <Route path={routes.HOME} exact component={Home} />

      {/* <Route path={routes.USER_DETAILS} component={UserDetails} /> */}
      <Route path={routes.USERS} component={Users} />

      <Route path={routes.HOME_WORKS} component={HomeWorks} />
      <Route path={routes.ABOUT} component={About} />

      <Route path={'/not-found'} component={NotFound} />

      <Redirect to="/not-found" />
    </Switch>
  </div>
);

export default Content;
