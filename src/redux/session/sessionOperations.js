import axios from 'axios';
import * as actions from './sessionActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';
axios.defaults.headers.common['Authorization'] = '';

const setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const removeToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const logIn = () => (dispatch) => {
  dispatch(actions.logInRequest());

  axios
    .post('/users/login', {
      email: 'test.user.2@gmail.com',
      password: '1234567',
    })
    .then((res) => {
      setToken(res.data.token);
      dispatch(actions.logInSuccess(res.data));
    })
    .catch((error) => dispatch(actions.logInFailure(error)));
};

export const signUp = () => (dispatch) => {
  // dispatch(actions.signUpSuccess());
};

export const logOut = () => (dispatch) => {
  dispatch(actions.logOutRequest());

  axios
    .post('/users/logout')
    .then(() => {
      removeToken();
      dispatch(actions.logOutSuccess());
    })
    .catch((error) => dispatch(actions.logOutFailure(error)));
};

export const getContacts = () => (dispatch) => {
  dispatch(actions.getContactsRequest());

  axios
    .get('/contacts')
    .then((res) => dispatch(actions.getContactsSuccess(res.data)))
    .catch((error) => dispatch(actions.getContactsFailure(error)));
};

export const getCurrentUser = () => (dispatch, getState) => {
  const {
    session: { token },
  } = getState();

  if (!token) {
    return;
  }

  setToken(token);
  dispatch(actions.getCurrentUserRequest());

  axios
    .get('/users/current')
    .then((res) => dispatch(actions.getCurrentUserSuccess(res.data)))
    .catch((error) => dispatch(actions.getCurrentUserFailure(error)));
};
