import axios from 'axios';
import * as actions from './todosActions';

axios.defaults.baseURL = 'http://localhost:3030';

export const getTodos = () => (dispatch) => {
  dispatch(actions.getTodosRequest());

  axios
    .get('/todos')
    .then(({ data }) => dispatch(actions.getTodosSuccess(data)))
    .catch((error) => dispatch(actions.getTodosFailure(error)));
};

export const addTodo = (item) => (dispatch) => {
  dispatch(actions.addTodoRequest());

  axios
    .post('/todos', item)
    .then(({ data }) => dispatch(actions.addTodoSuccess(data)))
    .catch((error) => dispatch(actions.addTodoFailure(error)));

  // dispatch(actions.addTodoFailure('My Error!!!!'));
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch(actions.deleteTodoRequest());

  axios
    .delete(`/todos/${id}`)
    .then(() => dispatch(actions.deleteTodoSuccess(id)))
    .catch((error) => dispatch(actions.deleteTodoFailure(error)));
};

export const fetchSettings = () => () => {
  axios
    .get('/settings')
    .then(({ data }) => localStorage.setItem('settings', JSON.stringify(data)))
    .catch(console.log);
};
