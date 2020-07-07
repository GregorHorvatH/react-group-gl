import { combineReducers } from 'redux';
import types from './counterTypes';

const initialState = {
  value: 0,
  step: 1,
};

const valueReducer = (state = initialState.value, { type, payload }) => {
  switch (type) {
    case types.INCREMENT:
      return state + payload.step;

    case types.DECREMENT:
      return state - payload.step;

    default:
      return state;
  }
};

const stepReducer = (state = initialState.step, { type, payload }) => {
  switch (type) {
    case types.SET_STEP:
      return payload.step;

    default:
      return state;
  }
};

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default counterReducer;
