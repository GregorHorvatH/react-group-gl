import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('ADD_TODO');
export const deleteTodo = createAction('DELETE_TODO');
export const setAscFilter = createAction('SET_ASC_FILTER');
export const setDescFilter = createAction('SET_DESC_FILTER');
