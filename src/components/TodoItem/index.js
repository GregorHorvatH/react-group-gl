import React, { Component } from 'react';
import './styles.scss';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.item.isChecked !== this.props.item.isChecked;
  }

  render() {
    const { item, onDelete, onToggle } = this.props;

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
  }
}

export default TodoItem;
