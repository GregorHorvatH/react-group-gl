import * as actions from '../redux/sessionActions';

export const logIn = () => (dispatch) => {
  dispatch(actions.logInSuccess());
};

export const signUp = () => (dispatch) => {
  dispatch(actions.signUp());
};
