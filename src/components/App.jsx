// core
import React, { Component } from 'react';

// components
import Home from './Home';
import Users from './Users';
import HomeWorks from './HomeWorks';
import About from './About';

// syles
import './App.styles.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ul className="menu">
          <li>
            <a href="/home">Home</a>
          </li>
          <li className="active">
            <a href="/users">Users</a>
          </li>
          <li>
            <a href="/home-works">Home Works</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
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
