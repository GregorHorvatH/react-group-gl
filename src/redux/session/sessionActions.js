import { createAction } from '@reduxjs/toolkit';

export const logInRequest = createAction('LOG_IN_REQUEST');
export const logInSuccess = createAction('LOG_IN_SUCCESS');
export const logInFailure = createAction('LOG_IN_FAILURE');

export const signUpRequest = createAction('SIGN_UP_REQUEST');
export const signUpSuccess = createAction('SIGN_UP_SUCCESS');
export const signUpFailure = createAction('SIGN_UP_FAILURE');

export const logOut = createAction('LOG_OUT');
