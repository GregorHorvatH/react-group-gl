import React from 'react';

const TodoItem = ({ item }) => (
  <li>
    {item.id === 1 ? <p>one</p> : <p>not one</p>}
    {item.text} <button>close</button>
  </li>
);

export default TodoItem;
