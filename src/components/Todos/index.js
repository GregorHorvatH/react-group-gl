import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import InputForm from './InputForm';
import Filters from './Filters';
import TodoListNotDoneContainer from './TodoList/TodoListNotDoneContainer';
import TodoListDoneContainer from './TodoList/TodoListDoneContainer';
import Loader from './Loader';

import { getTodos, fetchSettings } from '../../redux/todosAPI';

import './styles.scss';

const Todos = ({ fetchTodos, fetchSettings }) => {
  useEffect(() => {
    fetchTodos();
    fetchSettings();
  }, [fetchTodos, fetchSettings]);

  return (
    <Layout>
      <InputForm />
      <Filters />
      <Loader />
      <TodoListNotDoneContainer />
      <TodoListDoneContainer />
    </Layout>
  );
};

const mapDispatchToProps = {
  fetchTodos: getTodos,
  fetchSettings,
};

export default connect(null, mapDispatchToProps)(Todos);
