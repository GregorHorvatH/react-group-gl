import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';

import { cleanTodoError } from '../../../redux/todosActions';

import './styles.scss';

const TodoList = ({
  filter,
  isLoading,
  todos,
  errorMessage,
  cleanTodoError,
}) => {
  const sortedTodos = [...todos].sort((a, b) =>
    filter === 'asc' ? a.id - b.id : b.id - a.id,
  );

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <>
      {!!errorMessage && (
        <>
          <button onClick={cleanTodoError}>x</button>
          <h3>{errorMessage}</h3>
        </>
      )}

      <ul className="todo-list">
        {sortedTodos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = ({
  todos: { filter, items, isLoading, errorMessage },
}) => ({
  filter,
  isLoading,
  todos: items,
  errorMessage,
});

export default connect(mapStateToProps, { cleanTodoError })(TodoList);
