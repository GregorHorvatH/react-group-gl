import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';

const Todos = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <ul>
        {props.todos.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

Todos.propTypes = {
  title: PropTypes.string,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ),
};

Todos.defaultProps = {
  title: 'No Title Detected!!!',
  todos: [],
};

export default Todos;
