import React, { useState } from 'react';
import InputForm from './InputForm';
import Filters from './Filters';
import TodoList from './TodoList';
import './styles.scss';

const getColor = () => ['#DDD1C7', '#C2CFB2', '#8DB580'][~~(Math.random() * 3)];

const Todos = () => {
  const [filter, setFilter] = useState('desc');
  const [todos, setTodos] = useState([
    { id: 1, text: 'todo 1', color: '#DDD1C7' },
    { id: 2, text: 'todo 2', color: '#C2CFB2' },
    { id: 3, text: 'todo 3', color: '#8DB580' },
  ]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        color: getColor(),
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
      <h2 className="title">Todos</h2>
      <InputForm onSubmit={addTodo} />
      <Filters value={filter} onAsc={setSortAsc} onDesc={setSortDesc} />
      <TodoList filter={filter} todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default Todos;
