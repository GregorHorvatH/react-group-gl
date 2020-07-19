import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './sessionActions';

const initialState = {
  isAuthorized: false,
  error: null,
  token: null,
  user: null,
};

// ===== isAuthorized =====
const isAuthorized = createReducer(initialState.isAuthorized, {
  [actions.logInSuccess.type]: () => true,
  [actions.signUpSuccess.type]: () => true,
  [actions.logOut.type]: () => false,
});

// ===== error =====
const error = createReducer(initialState.error, {});

// ===== token =====
const token = createReducer(initialState.token, {});

// ===== user =====
const setUser = () => ({
  name: 'John Doe',
  avatar: '/img/avatar.jpeg',
  age: 35,
});

const user = createReducer(initialState.user, {
  [actions.logInSuccess.type]: setUser,
  [actions.logOut.type]: () => null,
});

export default combineReducers({
  isAuthorized,
  error,
  token,
  user,
});
