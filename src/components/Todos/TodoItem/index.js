import React, { Component } from 'react';
import './styles.scss';

class TodoItem extends Component {
  render() {
    const { todo, onDelete } = this.props;

    return (
      <li className="todo-item" style={{ backgroundColor: todo.color }}>
        <span>{todo.text}</span>
        <button onClick={onDelete}>x</button>
      </li>
    );
  }
}

export default TodoItem;
