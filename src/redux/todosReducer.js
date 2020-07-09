// import types from './todosTypes';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './todosActions';

const initialState = {
  items: [
    {
      id: 1,
      text: 'do something',
    },
  ],
  filter: 'desc',
  backgroundColor: 'black',
};

// const todosRreducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case types.ADD_TODO:
//       return {
//         ...state,
//         items: [...state.items, payload.item],
//       };

//     case types.DELETE_TODO:
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== payload.id),
//       };

//     default:
//       return state;
//   }
// };

const addTodo = (state, { payload: item }) => ({
  ...state,
  items: [...state.items, item],
  backgroundColor: 'white',
});

const deleteTodo = (state, { payload: id }) => ({
  ...state,
  items: state.items.filter((item) => item.id !== id),
});

const setAscFilter = (state) => ({
  ...state,
  filter: 'asc',
});

const setDescFilter = (state) => ({
  ...state,
  filter: 'desc',
});

const todosRreducer = createReducer(initialState, {
  [actions.addTodo.type]: addTodo,
  [actions.deleteTodo.type]: deleteTodo,
  [actions.setAscFilter.type]: setAscFilter,
  [actions.setDescFilter.type]: setDescFilter,
});

export default todosRreducer;
