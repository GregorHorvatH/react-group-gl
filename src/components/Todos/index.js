import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import InputForm from './InputForm';
import Filters from './Filters';
import TodoList from './TodoList';

import { getTodos } from '../../redux/todosAPI';

import './styles.scss';

const Todos = ({ fetchTodos }) => {
  useEffect(fetchTodos, []);

  return (
    <Layout>
      <InputForm />
      <Filters />
      <TodoList />
    </Layout>
  );
};

const mapDispatchToProps = {
  fetchTodos: getTodos,
};

export default connect(null, mapDispatchToProps)(Todos);
