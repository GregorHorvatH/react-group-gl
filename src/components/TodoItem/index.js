import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../redux/todos/todosApi';

import './styles.scss';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.item.isChecked !== this.props.item.isChecked;
  }

  render() {
    const { item, deleteTodo, toggleTodo } = this.props;

    return (
      <li className="todo-item">
        <div className="todo-data">
          <input
            type="checkbox"
            checked={item.isChecked}
            onChange={() => toggleTodo(item.id)}
          />
          <span>{item.text}</span>
        </div>
        <button onClick={() => deleteTodo(item.id)}>close</button>
      </li>
    );
  }
}

const mapDispatchToProps = {
  deleteTodo,
  toggleTodo,
};

export default connect(null, mapDispatchToProps)(TodoItem);
