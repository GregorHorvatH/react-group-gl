import React, { Component } from 'react';
import Form from './components/Form';
import Todos from './components/Todos';
import SomeComponent from './components/SomeComponent';

class App extends Component {
  state = {
    title: 'Todo List',
    items: [
      { id: 1, text: 'купить хлеб' },
      { id: 2, text: 'купить молоко' },
      { id: 3, text: 'купить колбасу' },
    ],
  };

  render() {
    return (
      <div className="todo-list">
        <SomeComponent>
          <Form />
          <Todos title={this.state.title} todos={this.state.items} />
        </SomeComponent>
      </div>
    );
  }
}

export default App;
