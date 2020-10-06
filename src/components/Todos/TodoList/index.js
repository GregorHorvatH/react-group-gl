import React, { memo } from 'react';
import TodoItem from '../TodoItem';

import './styles.scss';

const TodoList = memo(({ items }) => {
  console.log('render todo list');

  return (
    <ul className="todo-list">
      {items.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} />
      ))}
    </ul>
  );
});

export default TodoList;
