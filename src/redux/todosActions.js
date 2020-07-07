import types from './todosTypes';

export const addTodo = (item) => ({
  type: types.ADD_TODO,
  payload: { item },
});

export const deleteTodo = (id) => ({
  type: types.DELETE_TODO,
  payload: { id },
});
