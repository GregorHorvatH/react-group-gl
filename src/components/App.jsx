// core
import React, { Component, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

// components
import Navigation from './Navigation';
import Content from './Content';

// syles
import './App.styles.scss';

class App extends Component {
  render() {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <BrowserRouter>
          <div className="app">
            <Navigation />
            <Content />
          </div>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
