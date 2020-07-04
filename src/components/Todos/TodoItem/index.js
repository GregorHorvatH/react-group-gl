import React from 'react';
import './styles.scss';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <button onClick={onDelete}>x</button>
    </li>
  );
};

export default TodoItem;
