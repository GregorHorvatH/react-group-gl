import types from './counterTypes';

export const increment = (step) => ({
  type: types.INCREMENT,
  payload: { step },
});

export const decrement = (step) => ({
  type: types.DECREMENT,
  payload: { step },
});

export const setStep = (step) => ({
  type: types.SET_STEP,
  payload: { step },
});
