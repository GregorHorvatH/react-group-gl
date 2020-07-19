// core
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './Navbar';
import Content from './Content';

// store
import store from '../redux/store';

// styles
import './App.styles.scss';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Content />
      </Provider>
    </BrowserRouter>
  </div>
);

export default App;
