import React, { Component } from 'react';
import Counter from './Counter';
import Todos from './Todos';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Lesson 11 - Redux</h1>
        <Counter />
        <Todos />
      </div>
    );
  }
}

export default App;
