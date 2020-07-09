import React from 'react';
import Layout from './Layout';
import InputForm from './InputForm';
import Filters from './Filters';
import TodoList from './TodoList';

import './styles.scss';

const Todos = () => {
  // const [filter, setFilter] = useState('desc');

  // const setSortAsc = () => setFilter('asc');
  // const setSortDesc = () => setFilter('desc');

  // const handleAddTodo = (text) =>
  //   addTodo({
  //     id: Date.now(),
  //     color: getColor(),
  //     text,
  //   });

  return (
    <Layout>
      <InputForm />
      <Filters />
      <TodoList />
    </Layout>
  );
};

export default Todos;
