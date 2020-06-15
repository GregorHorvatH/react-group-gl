// core
import React, { Component } from 'react';

// components
import Home from './Home';
import Users from './Users';
// import UserDetails from './UserDetails';
import HomeWorks from './HomeWorks';
import About from './About';

// syles
import './App.styles.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="navigation">
          <a className="link" href="/">
            Home
          </a>
          <a className="link active-link" href="/users">
            Users
          </a>
          <a className="link" href="/home-works">
            Home Works
          </a>
          <a className="link" href="/about">
            About
          </a>
        </div>
        <div className="body">
          <h1>Lesson 07 - Routing</h1>
          <Home />
          <Users />
          <HomeWorks />
          <About />
        </div>
      </div>
    );
  }
}

export default App;
