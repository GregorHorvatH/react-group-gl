import * as actions from '../redux/sessionActions';

export const logIn = () => (dispatch) => {
  dispatch(actions.logInSuccess());
};

export const signIn = () => (dispatch) => {
  dispatch(actions.signIn());
};
