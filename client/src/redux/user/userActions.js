import userActionTypes from './userActionTypes';

const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

const emailSignInStart = emailAndPassword => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

const signInSuccess = user => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

const signInFailure = error => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});

const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

const signOutFailure = errorMessage => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: errorMessage,
});

const userActions = {
  setCurrentUser,
  emailSignInStart,
  googleSignInStart,
  signInSuccess,
  signInFailure,
  checkUserSession,
  signOutStart,
  signOutSuccess,
  signOutFailure,
};

export default userActions;
