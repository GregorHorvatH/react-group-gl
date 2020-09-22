import { createStore, combineReducers } from 'redux';

import counterReducer from './counter/counterReducer';

const store = createStore(
  combineReducers({
    counter: counterReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
