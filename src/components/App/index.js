import React, { Component } from 'react';
import Counter from '../Counter';
import Todos from '../Todos';
import Status from '../Status';

import './styles.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="title">Lesson 11 - Redux</h1>

        <div className="content">
          <div className="widgets">
            <Counter />
            <Todos />
          </div>
          <Status />
        </div>
      </div>
    );
  }
}

export default App;
