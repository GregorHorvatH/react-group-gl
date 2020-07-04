import types from './counterTypes';

export const onIncrement = (value) => ({
  type: types.INCREMENT,
  payload: { value },
});

export const onDecrement = (value) => ({
  type: types.DECREMENT,
  payload: { value },
});

export const setStep = (value) => ({
  type: types.SET_STEP,
  payload: { value: Number(value) },
});
