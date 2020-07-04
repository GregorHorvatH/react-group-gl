import React from 'react';
import FlipMove from 'react-flip-move';
import TodoItem from '../TodoItem';
import './styles.scss';

const TodoList = ({ filter, todos, onDelete }) => {
  const sortedTodos = [...todos].sort((a, b) =>
    filter === 'asc' ? a.id - b.id : b.id - a.id,
  );

  return (
    <div className="list-wrapper">
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
