import React, { Component } from 'react';
import './styles.scss';

// const TodoItem = ({ item, onDelete, onToggle }) => {
//   console.log('item render', item.id);

//   return (
//     <li className="todo-item">
//       <div className="todo-data">
//         <input
//           type="checkbox"
//           checked={item.isChecked}
//           onChange={() => onToggle(item.id)}
//         />
//         <span>{item.text}</span>
//       </div>
//       <button onClick={() => onDelete(item.id)}>close</button>
//     </li>
//   );
// };

class TodoItem extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.item.isChecked !== this.props.item.isChecked;
  }

  render() {
    const { item, onDelete, onToggle } = this.props;

    // console.log('item render', item.id);
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
