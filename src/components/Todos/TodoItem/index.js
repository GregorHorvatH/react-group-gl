import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../../../redux/todosAPI';
import './styles.scss';

class TodoItem extends Component {
  render() {
    const { todo = {}, onDelete } = this.props;
    const { color = '', text = '' } = todo;

    return (
      <li className="todo-item" style={{ backgroundColor: color }}>
        <span>{text}</span>
        <button onClick={onDelete}>x</button>
      </li>
    );
  }
}

const mapStateToProps = ({ todos: { items } }, { id }) => ({
  todo: items.find((item) => item.id === id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(deleteTodo(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
