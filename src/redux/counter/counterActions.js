import types from './counterTypes';

export const onIncrement = (step) => ({
  type: types.INCREMENT,
  payload: { step },
});

export const onDecrement = (step) => ({
  type: types.DECREMENT,
  payload: { step },
});

export const onSetStep = (value) => ({
  type: types.SET_STEP,
  payload: { value },
});
