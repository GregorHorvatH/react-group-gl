import React, { Component } from 'react';
import Context from '../Todos/TodosContext';

import './styles.scss';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.item.isChecked !== this.props.item.isChecked;
  }

  render() {
    const { item } = this.props;

    return (
      <Context.Consumer>
        {({ onDelete, onToggle }) => {
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
        }}
      </Context.Consumer>
    );
  }
}

export default TodoItem;
