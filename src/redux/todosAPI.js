import axios from 'axios';
import * as actions from './todosActions';

export const getTodos = () => (dispatch) => {
  dispatch(actions.getTodosRequest());

  axios
    .get('http://localhost:3030/todos')
    .then(({ data }) => dispatch(actions.getTodosSuccess(data)))
    .catch((error) => dispatch(actions.getTodosFailure(error)));
};

export const addTodo = (item) => (dispatch) => {
  dispatch(actions.addTodoRequest());

  axios
    .post('http://localhost:3030/todos', item)
    .then(({ data }) => dispatch(actions.addTodoSuccess(data)))
    .catch((error) => dispatch(actions.addTodoFailure(error)));

  // dispatch(actions.addTodoFailure('My Error!!!!'));
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch(actions.deleteTodoRequest());

  axios
    .delete(`http://localhost:3030/todos/${id}`)
    .then(() => dispatch(actions.deleteTodoSuccess(id)))
    .catch((error) => dispatch(actions.deleteTodoFailure(error)));
};
