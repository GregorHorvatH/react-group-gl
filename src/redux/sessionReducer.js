import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './sessionActions';

const initialState = {
  isAuthorized: false,
  error: null,
  token: null,
  user: null,
};

const isAuthorized = createReducer(initialState.isAuthorized, {
  [actions.logInSuccess.type]: () => true,
  [actions.signUp.type]: () => true,
  [actions.logOut.type]: () => false,
});

const error = createReducer(initialState.error, {});

const token = createReducer(initialState.token, {});

const user = createReducer(initialState.user, {
  [actions.logInSuccess.type]: () => ({
    name: 'John Doe',
    avatar: '/img/avatar.jpeg',
    age: 35,
  }),
  [actions.logOut.type]: () => null,
});

export default combineReducers({
  isAuthorized,
  error,
  token,
  user,
});
