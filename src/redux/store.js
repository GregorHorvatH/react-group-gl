import { configureStore } from '@reduxjs/toolkit';
import counter from './counter/counterReducer';
import todos from './todos/todosReducer';

const store = configureStore({
  reducer: {
    counter,
    todos,
  },
});

export default store;

// import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import counter from './counter/counterReducer';
// import todos from './todos/todosReducer';

// // const myLogger = (store) => (next) => (action) => {
// //   console.group(action.type);
// //   console.info('dispatching', action);
// //   console.groupEnd(action.type);

// //   next(action);
// // };

// // const myThunk = (store) => (next) => (action) => {
// //   if (typeof action === 'function') {
// //     action(store.dispatch, store.getState);
// //   } else {
// //     next(action);
// //   }
// // };

// const middleware = [thunk];

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// );
// const store = createStore(
//   combineReducers({
//     counter,
//     todos,
//   }),
//   enhancer,
// );

// export default store;
