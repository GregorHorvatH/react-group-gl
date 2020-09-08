import React, { Component } from 'react';
import Form from '../Form';
import Filter from '../Filter';
import TodoList from '../TodoList';
import WithTitle from '../WithTitle';

class Todos extends Component {
  // constructor() {
  //   super();

  //   console.log('constructor');
  // }

  state = {
    title: 'Todo List',
    // items: [
    //   { id: 1, text: 'купить хлеб', isChecked: false },
    //   { id: 2, text: 'купить молоко', isChecked: false },
    //   { id: 3, text: 'купить колбасу', isChecked: true },
    // ],
    items: [],
    filter: '',
  };

  handleAddTodo = (item) => {
    this.setState(({ items }) => ({
      items: [...items, item],
    }));
  };

  handleDeleteTodo = (id) => {
    this.setState(({ items }) => ({
      items: items.filter((item) => item.id !== id),
    }));
  };

  handleToggleTodo = (id) => {
    this.setState(({ items }) => ({
      items: items.map((item) =>
        item.id === id
          ? {
              ...item,
              isChecked: !item.isChecked,
            }
          : item,
      ),
    }));
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  componentDidMount() {
    // console.log('todos did mount, load data');

    const items = JSON.parse(localStorage.getItem('todos'));

    if (items) {
      this.setState({ items });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('todo did update');

    if (prevState.items !== this.state.items) {
      localStorage.setItem('todos', JSON.stringify(this.state.items));
    }
  }

  render() {
    // console.log('todos render');

    return (
      <WithTitle title={this.state.title} width={400}>
        <Form onSubmit={this.handleAddTodo} />
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <TodoList
          items={this.state.items}
          onDelete={this.handleDeleteTodo}
          onToggle={this.handleToggleTodo}
        />
      </WithTitle>
    );
  }
}

export default Todos;
