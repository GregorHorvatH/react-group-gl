import React, { useEffect } from 'react';

import Home from '../Home';
import Users from '../Users';
import HomeWorks from '../HomeWorks';
import About from '../About';
import NotFound from '../NotFound';
// import UserDetails from '../UserDetails';

const PageSelector = () => {
  switch (window.location.pathname) {
    case '/':
      return <Home />;
    case '/users-page':
      return <Users />;
    case '/home-works':
      return <HomeWorks />;
    case '/about':
      return <About />;
    default:
      return <NotFound />;
  }
};

const Content = () => {
  useEffect(() => {
    console.log(window.location.pathname);
  }, []);

  return (
    <div className="content">
      <h1>Lesson 07 - Routing</h1>

      <PageSelector />
    </div>
  );
};

export default Content;
