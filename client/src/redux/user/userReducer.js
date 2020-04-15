import userActionTypes from './userActionTypes';

const initialState = {
  currentUser: null,
  errorMessage: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        errorMessage: null,
      };

    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null,
      };

    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        currentUser: null,
        errorMessage: payload,
      };

    default:
      return state;
  }
};
