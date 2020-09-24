import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { onIncrement, onDecrement, onSetStep } from './counterActions';

const initialState = {
  value: 5,
  step: 1,
};

// functions
const handleIncrement = (value, { payload }) => value + payload.step;
const handleDecrement = (value, { payload: step }) =>
  value - step < 0 ? value : value - step;
const handleSetReducer = (_, { payload: value }) => value;

// reducers
const valueReducer = createReducer(initialState.value, {
  [onIncrement.type]: handleIncrement,
  [onDecrement.type]: handleDecrement,
});

const stepReducer = createReducer(initialState.step, {
  [onSetStep.type]: handleSetReducer,
});

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
