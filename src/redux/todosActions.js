// import types from './todosTypes';

// export const addTodo = (item) => ({
//   type: types.ADD_TODO,
//   payload: { item },
// });

// export const deleteTodo = (id) => ({
//   type: types.DELETE_TODO,
//   payload: { id },
// });

import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('ADD_TODO');
export const deleteTodo = createAction('DELETE_TODO');
export const setAscFilter = createAction('SET_ASC_FILTER');
export const setDescFilter = createAction('SET_DESC_FILTER');
