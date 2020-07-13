import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './todosActions';

const initialState = {
  items: [
    {
      id: 1,
      text: 'do something',
    },
  ],
  filter: 'desc',
};

const addTodo = (items, { payload: item }) => [...items, item];
const deleteTodo = (items, { payload: id }) =>
  items.filter((item) => item.id !== id);

const setAscFilter = () => 'asc';
const setDescFilter = () => 'desc';

const items = createReducer(initialState.items, {
  [actions.addTodo.type]: addTodo,
  [actions.deleteTodo.type]: deleteTodo,
});

const filter = createReducer(initialState.filter, {
  [actions.setAscFilter.type]: setAscFilter,
  [actions.setDescFilter.type]: setDescFilter,
});

export default combineReducers({
  items,
  filter,
});
