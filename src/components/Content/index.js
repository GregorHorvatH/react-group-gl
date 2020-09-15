import React, { useEffect } from 'react';

import Home from '../Home';
import Users from '../Users';
import HomeWorks from '../HomeWorks';
import About from '../About';

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
      return <Home />;
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
      {/* <div className="home">
        <h3>Home Page</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla dicta
          ullam, laborum velit nesciunt hic provident est voluptate blanditiis,
          neque sapiente tempore impedit dolorem amet voluptatibus eos illo,
          magnam sunt.
        </p>
      </div> */}
    </div>
  );
};

export default Content;
