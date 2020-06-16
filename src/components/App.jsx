// core
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// components
import Navigation from './Navigation';
import Content from './Content';

// syles
import './App.styles.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navigation />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
