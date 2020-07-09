import React, { useState } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import InputForm from './InputForm';
import Filters from './Filters';
import TodoList from './TodoList';

import * as todosActions from '../../redux/todosActions';

import './styles.scss';

const getColor = () => ['#DDD1C7', '#C2CFB2', '#8DB580'][~~(Math.random() * 3)];

const Todos = ({ items, addTodo, deleteTodo }) => {
  const [filter, setFilter] = useState('desc');

  const setSortAsc = () => setFilter('asc');
  const setSortDesc = () => setFilter('desc');

  const handleAddTodo = (text) =>
    addTodo({
      id: Date.now(),
      color: getColor(),
      text,
    });

  return (
    <Layout>
      <InputForm onSubmit={handleAddTodo} />
      <Filters value={filter} onAsc={setSortAsc} onDesc={setSortDesc} />
      <TodoList filter={filter} todos={items} onDelete={deleteTodo} />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  items: state.todos.items,
});

const mapDispatchToProps = {
  addTodo: todosActions.addTodo,
  deleteTodo: todosActions.deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
