import React, { useState } from 'react';
import FlipMove from 'react-flip-move';
import TodoItem from '../TodoItem';
import './styles.scss';

const TodoList = ({ todos, onDelete }) => {
  const [sortDirection, setSortDirection] = useState('desc');
  const sortedTodos = [...todos].sort((a, b) =>
    sortDirection === 'asc' ? a.id - b.id : b.id - a.id,
  );

  return (
    <div className="list-wrapper">
      <div className="filters">
        <label>
          <span>asc</span>
          <input
            className="button"
            type="radio"
            value="asc"
            checked={sortDirection === 'asc'}
            onChange={() => setSortDirection('asc')}
          />
        </label>
        <label>
          <span>desc</span>
          <input
            className="button"
            type="radio"
            value="desc"
            checked={sortDirection === 'desc'}
            onChange={() => setSortDirection('desc')}
          />
        </label>
      </div>

      <ul className="todo-list">
        <FlipMove>
          {sortedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={() => onDelete(todo.id)}
            />
          ))}
        </FlipMove>
      </ul>
    </div>
  );
};

export default TodoList;
