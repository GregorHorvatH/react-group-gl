import * as actions from './sessionActions';

export const logIn = () => (dispatch) => {
  dispatch(actions.logInSuccess());
};

export const signUp = () => (dispatch) => {
  dispatch(actions.signUpSuccess());
};
