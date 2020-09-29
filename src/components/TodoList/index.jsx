import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';

import './styles.scss';

const TodoList = ({ items }) => {
  return (
    <ul className="todo-items">
      {items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      text: PropTypes.string,
    }),
  ),
};

const mapStateToProps = ({ todos }) => ({
  items: todos.items,
});

export default connect(mapStateToProps)(TodoList);
