import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import './styles.scss';

const TodoList = ({ items, onDelete, onToggle }) => (
  <ul className="todo-items">
    {items.map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      text: PropTypes.string,
    }),
  ),
};

// TodoList.defaultProps = {
//   items: [],
// };

export default TodoList;
