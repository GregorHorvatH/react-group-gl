import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Form from '../Form';
import Filter from '../Filter';
import TodoList from '../TodoList';
import WithTitle from '../WithTitle';
import { createTodo, fetchTodos } from '../../redux/todos/todosApi';
import './todos.scss';

class Todos extends Component {
  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  state = {
    title: 'Todo List',
    filter: '',
    error: '',
    isVisible: true,
  };

  handleToggleVisible = () =>
    this.setState(({ isVisible }) => ({ isVisible: !isVisible }));

  render() {
    const { title, filter, isVisible } = this.state;
    const { isLoading, createTodo } = this.props;

    return (
      <WithTitle title={title} width={400}>
        <Form onSubmit={createTodo} />
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
    );
  }
}

const mapStateToProps = ({ todos }) => ({
  isLoading: todos.isLoading,
});

const mapDispatchToProps = {
  createTodo,
  fetchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
