import { createAction } from '@reduxjs/toolkit';

export const onIncrement = createAction('counter/increment', (step) => ({
  payload: { step },
  error: 'no error here :)',
}));
export const onDecrement = createAction('counter/decrement');
export const onSetStep = createAction('counter/setStep');
