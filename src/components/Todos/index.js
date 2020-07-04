import React, { useState } from 'react';
import InputForm from './InputForm';
import Filters from './Filters';
import TodoList from './TodoList';
import './styles.scss';

const Todos = () => {
  const [filter, setFilter] = useState('desc');
  const [todos, setTodos] = useState([
    { id: 1, text: 'todo 1' },
    { id: 2, text: 'todo 2' },
    { id: 3, text: 'todo 3' },
  ]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const setSortAsc = () => setFilter('asc');
  const setSortDesc = () => setFilter('desc');

  return (
    <div className="todos">
      <h2>Todos</h2>
      <InputForm onSubmit={addTodo} />
      <Filters value={filter} onAsc={setSortAsc} onDesc={setSortDesc} />
      <TodoList filter={filter} todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default Todos;
