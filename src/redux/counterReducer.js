// import { combineReducers } from 'redux';
// import types from './counterTypes';

import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './counterActions';

const initialState = {
  value: 0,
  step: 1,
};

// const valueReducer = (state = initialState.value, { type, payload: step }) => {
//   switch (type) {
//     case types.INCREMENT:
//       return state + step;

//     case types.DECREMENT:
//       return state - step;

//     default:
//       return state;
//   }
// };

// const stepReducer = (state = initialState.step, { type, payload: step }) => {
//   switch (type) {
//     case types.SET_STEP:
//       return step;

//     default:
//       return state;
//   }
// };

// const counterReducer = combineReducers({
//   value,
//   step,
// });

const increment = (state, { payload: step }) => state + step;
const decrement = (state, { payload: step }) => state - step;
const setStep = (_, { payload: step }) => step;

const value = createReducer(initialState.value, {
  [actions.increment.type]: increment,
  [actions.decrement.type]: decrement,
  [actions.setStep.type]: () => 0,
});

const step = createReducer(initialState.step, {
  [actions.setStep.type]: setStep,
});

export default combineReducers({
  value,
  step,
});
