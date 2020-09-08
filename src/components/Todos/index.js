import React, { Component } from 'react';
import Form from '../Form';
import TodoList from '../TodoList';
import WithTitle from '../WithTitle';

class Todos extends Component {
  state = {
    title: 'Todo List',
    items: [
      { id: 1, text: 'купить хлеб', isChecked: false },
      { id: 2, text: 'купить молоко', isChecked: false },
      { id: 3, text: 'купить колбасу', isChecked: true },
    ],
  };

  handleAddTodo = (item) => {
    // setState is async
    this.setState(
      ({ items }) => ({
        items: [...items, item],
      }),
      () => {
        console.log('items:', this.state.items);
      },
    );
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

  render() {
    return (
      <WithTitle title={this.state.title} width={400}>
        <Form onSubmit={this.handleAddTodo} />
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
