import React, { Component } from 'react';
import Form from '../Form';
import Filter from '../Filter';
import TodoList from '../TodoList';
import WithTitle from '../WithTitle';
import {
  getAllTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from '../../api/todos';

class Todos extends Component {
  state = {
    title: 'Todo List',
    items: [],
    filter: '',
    error: '',
    isLoading: false,
  };

  handleAddTodo = (item) => {
    this.setState({ isLoading: true });

    createTodo(item)
      .then((newItem) => {
        this.setState(({ items }) => ({
          items: [...items, newItem],
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleDeleteTodo = (id) => {
    this.setState({ isLoading: true });

    deleteTodo(id)
      .then(() => {
        this.setState(({ items }) => ({
          items: items.filter((item) => item.id !== id),
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleToggleTodo = (id) => {
    const isChecked = this.state.items.find((item) => item.id === id).isChecked;

    this.setState({ isLoading: true });

    updateTodo(id, { isChecked: !isChecked })
      .then((newItem) => {
        this.setState(({ items }) => ({
          items: items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  isChecked: newItem.isChecked,
                }
              : item,
          ),
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    getAllTodos()
      .then((items) => this.setState({ items }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { title, filter, items, isLoading } = this.state;

    return (
      <WithTitle title={title} width={400}>
        <Form onSubmit={this.handleAddTodo} />
        <Filter value={filter} onChange={this.handleFilterChange} />

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <TodoList
            items={items}
            onDelete={this.handleDeleteTodo}
            onToggle={this.handleToggleTodo}
          />
        )}
      </WithTitle>
    );
  }
}

export default Todos;
