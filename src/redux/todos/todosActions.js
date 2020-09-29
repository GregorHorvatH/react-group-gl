import { createAction } from '@reduxjs/toolkit';

export const fetchTodosStart = createAction('todos/fetch/start');
export const fetchTodosSuccess = createAction('todos/fetch/success');
export const fetchTodosFailure = createAction('todos/fetch/failure');

export const createTodoStart = createAction('todos/create/start');
export const createTodoSuccess = createAction('todos/create/success');
export const createTodoFailure = createAction('todos/create/failure');

export const deleteTodoStart = createAction('todos/delete/start');
export const deleteTodoSuccess = createAction('todos/delete/success');
export const deleteTodoFailure = createAction('todos/delete/failure');

export const toggleTodoStart = createAction('todos/toggle/start');
export const toggleTodoSuccess = createAction('todos/toggle/success');
export const toggleTodoFailure = createAction('todos/toggle/failure');
