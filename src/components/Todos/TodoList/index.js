import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';

import './styles.scss';

const TodoList = ({ filter, todos }) => {
  const sortedTodos = [...todos].sort((a, b) =>
    filter === 'asc' ? a.id - b.id : b.id - a.id,
  );

  return (
    <ul className="todo-list">
      {sortedTodos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} />
      ))}
    </ul>
  );
};

const mapStateToProps = ({ todos: { filter, items } }) => ({
  filter,
  todos: items,
});

export default connect(mapStateToProps)(TodoList);
