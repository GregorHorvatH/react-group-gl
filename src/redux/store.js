// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counter from './counterReducer';
import todos from './todosReducer';

const myLogger = (store) => (next) => (action) => {
  // console.log('state:', store.getState());
  // console.log('action:', action);

  next(action);
};

const store = configureStore({
  reducer: {
    counter,
    todos,
  },
  middleware: [...getDefaultMiddleware(), myLogger],
});

// const myThunk = (store) => (next) => (action) => {
//   if (typeof action === 'function') {
//     action(store.dispatch, store.getState);
//   } else {
//     next(action);
//   }
// };

// const store = createStore(
//   combineReducers({
//     counter,
//     todos,
//   }),
//   applyMiddleware(...[myLogger, myThunk]),
// );

export default store;
