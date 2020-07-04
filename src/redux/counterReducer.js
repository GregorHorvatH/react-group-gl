import { combineReducers } from 'redux';
import types from './counterTypes';

const initialState = {
  value: 0,
  step: 10,
};

const valueReducer = (state = initialState.value, { type, payload }) => {
  switch (type) {
    case types.INCREMENT:
      return state + payload.value;

    case types.DECREMENT:
      return state - payload.value;

    default:
      return state;
  }
};

const stepReducer = (state = initialState.step, { type, payload }) => {
  switch (type) {
    case types.SET_STEP:
      return payload.value;

    default:
      return state;
  }
};

const reducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default reducer;
