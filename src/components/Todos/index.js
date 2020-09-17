import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
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

import Context from './TodosContext';
import './todos.scss';

class Todos extends Component {
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

  state = {
    title: 'Todo List',
    items: [],
    filter: '',
    error: '',
    isLoading: false,
    isVisible: true,
    onDelete: this.handleDeleteTodo,
    onToggle: this.handleToggleTodo,
  };

  handleToggleVisible = () =>
    this.setState(({ isVisible }) => ({ isVisible: !isVisible }));

  render() {
    const { title, filter, isLoading, isVisible } = this.state;

    return (
      <Context.Provider value={this.state}>
        <WithTitle title={title} width={400}>
          <Form onSubmit={this.handleAddTodo} />
          <Filter value={filter} onChange={this.handleFilterChange} />

          <button onClick={this.handleToggleVisible}>Push me</button>
          <CSSTransition
            classNames="todos"
            in={isVisible}
            timeout={300}
            unmountOnExit
            onEnter={() => console.log('enter')}
            onEntering={() => console.log('entering')}
            onEntered={() => console.log('entered')}
            onExit={() => console.log('exit')}
            onExiting={() => console.log('exiting')}
            onExited={() => console.log('exited')}
          >
            {isLoading ? <p>Loading...</p> : <TodoList />}
          </CSSTransition>
        </WithTitle>
      </Context.Provider>
    );
  }
}

export default Todos;
