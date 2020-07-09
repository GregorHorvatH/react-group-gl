// import { createStore, combineReducers } from 'redux';

// import counterReducer from './counterReducer';
// import todosReducer from './todosReducer';

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todos: todosReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

import { configureStore } from '@reduxjs/toolkit';
import counter from './counterReducer';
import todos from './todosReducer';

const store = configureStore({
  reducer: {
    counter,
    todos,
  },
});

export default store;
