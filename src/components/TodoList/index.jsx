import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import Context from '../Todos/TodosContext';

import './styles.scss';

const TodoList = () => {
  const { items } = useContext(Context);

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

export default TodoList;
