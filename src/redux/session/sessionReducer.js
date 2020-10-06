import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './sessionActions';

const initialState = {
  isAuthorized: false,
  error: null,
  token: null,
  user: null,
  isLoading: false,
  isAuthorizing: true,
};

// ===== isAuthorized =====
const isAuthorized = createReducer(initialState.isAuthorized, {
  [actions.logInSuccess.type]: () => true,
  [actions.signUpSuccess.type]: () => true,
  [actions.logOutSuccess]: () => false,
  [actions.logOutFailure]: () => false,

  [actions.getCurrentUserSuccess]: () => true,
  [actions.getCurrentUserFailure]: () => false,
});

// ===== error =====
const error = createReducer(initialState.error, {});

// ===== token =====
const setToken = (state, action) => action.payload.token;

const token = createReducer(initialState.token, {
  [actions.logInSuccess.type]: setToken,
});

// ===== user =====
const setUser = (state, action) => action.payload.user;

const user = createReducer(initialState.user, {
  [actions.logInSuccess.type]: setUser,
  [actions.logOutSuccess.type]: () => null,
  [actions.logOutFailure.type]: () => null,

  [actions.getCurrentUserSuccess]: (state, action) => action.payload,
  [actions.getCurrentUserFailure]: () => null,
});

// isLoading
const isLoading = createReducer(initialState.isLoading, {
  [actions.logInRequest]: () => true,
  [actions.logInSuccess]: () => false,
  [actions.logInFailure]: () => false,
});

// isAuthorizing
const isAuthorizing = createReducer(initialState.isAuthorizing, {
  [actions.getCurrentUserSuccess]: () => false,
  [actions.getCurrentUserFailure]: () => false,
});

export default combineReducers({
  isAuthorized,
  error,
  token,
  user,
  isLoading,
  isAuthorizing,
});
