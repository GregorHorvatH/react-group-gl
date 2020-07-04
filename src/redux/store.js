import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import counterReducer from './counterReducer';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(
    createLogger({
      duration: true,
      collapsed: true,
    }),
  );
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
