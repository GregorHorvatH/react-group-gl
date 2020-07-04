import React from 'react';
import TodoItem from '../TodoItem';
import './styles.scss';

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
