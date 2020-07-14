import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './todosActions';

const initialState = {
  items: [],
  filter: 'desc',
  isLoading: false,
  errorMessage: '',
};

const addTodo = (items, { payload: item }) => [...items, item];
const deleteTodo = (items, { payload: id }) =>
  items.filter((item) => item.id !== id);

const setAscFilter = () => 'asc';
const setDescFilter = () => 'desc';

const items = createReducer(initialState.items, {
  [actions.getTodosSuccess.type]: (_, { payload: todos }) => todos,
  [actions.addTodoSuccess.type]: addTodo,
  [actions.deleteTodoSuccess.type]: deleteTodo,
});

const filter = createReducer(initialState.filter, {
  [actions.setAscFilter.type]: setAscFilter,
  [actions.setDescFilter.type]: setDescFilter,
});

const isLoading = createReducer(initialState.isLoading, {
  [actions.getTodosRequest.type]: () => true,
  [actions.getTodosSuccess.type]: () => false,
  [actions.getTodosFailure.type]: () => false,

  [actions.addTodoRequest.type]: () => true,
  [actions.addTodoSuccess.type]: () => false,
  [actions.addTodoFailure.type]: () => false,

  [actions.deleteTodoRequest.type]: () => true,
  [actions.deleteTodoSuccess.type]: () => false,
  [actions.deleteTodoFailure.type]: () => false,
});

const setError = (_, { payload: error }) => error;

const errorMessage = createReducer(initialState.errorMessage, {
  [actions.getTodosFailure.type]: setError,
  [actions.addTodoFailure.type]: setError,
  [actions.deleteTodoFailure.type]: setError,

  [actions.cleanTodoError.type]: () => '',
});

export default combineReducers({
  items,
  filter,
  isLoading,
  errorMessage,
});
