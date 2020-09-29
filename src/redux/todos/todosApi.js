import {
  fetchTodosFailure,
  fetchTodosStart,
  fetchTodosSuccess,
  createTodoStart,
  createTodoSuccess,
  createTodoFailure,
  deleteTodoStart,
  deleteTodoSuccess,
  deleteTodoFailure,
  toggleTodoStart,
  toggleTodoSuccess,
  toggleTodoFailure,
} from './todosActions';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3004';
axios.defaults.headers.common['Authorization'] = 'Bearer dsjfhgfds lgjghkdfgk ';

// get all
export const fetchTodos = () => (dispatch) => {
  dispatch(fetchTodosStart());

  axios
    .get('/todos')
    .then((res) => dispatch(fetchTodosSuccess(res.data)))
    .catch((error) => dispatch(fetchTodosFailure(error)));
};

// delete item
export const deleteTodo = (id) => (dispatch) => {
  dispatch(deleteTodoStart());

  axios
    .delete(`/todos/${id}`)
    .then(() => dispatch(deleteTodoSuccess(id)))
    .catch((error) => dispatch(deleteTodoFailure(error)));
};

// create new item
export const createTodo = (todo) => (dispatch) => {
  dispatch(createTodoStart());

  axios
    .post('/todos', todo)
    .then((res) => dispatch(createTodoSuccess(res.data)))
    .catch((error) => dispatch(createTodoFailure(error)));
};

// update item
export const toggleTodo = (id) => (dispatch, getState) => {
  dispatch(toggleTodoStart());

  const state = getState();
  const isChecked = state.todos.items.find((item) => item.id === id).isChecked;

  axios
    .patch(`/todos/${id}`, { isChecked: !isChecked })
    .then((res) => dispatch(toggleTodoSuccess(res.data)))
    .catch((error) => dispatch(toggleTodoFailure(error)));
};
