import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  createTodoStart,
  createTodoSuccess,
  createTodoFailure,
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosFailure,
  deleteTodoStart,
  deleteTodoSuccess,
  deleteTodoFailure,
  toggleTodoStart,
  toggleTodoSuccess,
  toggleTodoFailure,
} from './todosActions';

// initial state
const initialState = {
  items: [],
  isLoading: false,
};

// functions
const fetchTodos = (_, { payload: items }) => items;

const createTodo = (items, { payload: newItem }) => [...items, newItem];

const deleteTodo = (items, { payload: todoId }) =>
  items.filter(({ id }) => id !== todoId);

const toggleTodo = (items, { payload: newItem }) =>
  items.map((item) =>
    item.id === newItem.id
      ? {
          ...item,
          isChecked: newItem.isChecked,
        }
      : item,
  );

// items
const itemsReducer = createReducer(initialState.items, {
  [fetchTodosSuccess.type]: fetchTodos,
  [createTodoSuccess.type]: createTodo,
  [deleteTodoSuccess.type]: deleteTodo,
  [toggleTodoSuccess.type]: toggleTodo,
});

// isLoading
const isLoadingReducer = createReducer(initialState.isLoading, {
  [fetchTodosStart.type]: () => true,
  [fetchTodosSuccess.type]: () => false,
  [fetchTodosFailure.type]: () => false,

  [createTodoStart.type]: () => true,
  [createTodoSuccess.type]: () => false,
  [createTodoFailure.type]: () => false,

  [deleteTodoStart.type]: () => true,
  [deleteTodoSuccess.type]: () => false,
  [deleteTodoFailure.type]: () => false,

  [toggleTodoStart.type]: () => true,
  [toggleTodoSuccess.type]: () => false,
  [toggleTodoFailure.type]: () => false,
});

// export
export default combineReducers({
  items: itemsReducer,
  isLoading: isLoadingReducer,
});
