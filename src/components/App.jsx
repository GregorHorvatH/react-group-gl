// core
import React, { Component } from 'react';

// components
import Navigation from './Navigation';
import Content from './Content';

// syles
import './App.styles.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <Content />
      </div>
    );
  }
}

export default App;
