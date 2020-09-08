import React from 'react';
import './styles.scss';

const TodoItem = ({ item, onDelete, onToggle }) => {
  return (
    <li className="todo-item">
      <div className="todo-data">
        <input
          type="checkbox"
          checked={item.isChecked}
          onChange={() => onToggle(item.id)}
        />
        <span>{item.text}</span>
      </div>
      <button onClick={() => onDelete(item.id)}>close</button>
    </li>
  );
};

export default TodoItem;
