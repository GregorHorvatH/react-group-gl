import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3004';
axios.defaults.headers.common['Authorization'] = 'Bearer dsjfhgfds lgjghkdfgk ';

export const getAllTodos = () => axios.get('/todos').then((res) => res.data);

export const createTodo = (payload) =>
  axios.post('/todos', payload).then((res) => res.data);

export const deleteTodo = (id) => axios.delete(`/todos/${id}`);

export const updateTodo = (id, payload) =>
  axios.patch(`/todos/${id}`, payload).then((res) => res.data);
