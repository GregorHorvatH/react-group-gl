import React from 'react';

const TodoItem = ({ item, onDelete, onToggle }) => (
  <li>
    <input
      type="checkbox"
      checked={item.isChecked}
      onChange={() => onToggle(item.id)}
    />
    {item.text} <button onClick={() => onDelete(item.id)}>close</button>
  </li>
);

export default TodoItem;
