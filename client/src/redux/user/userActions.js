import { userActionTypes } from './userActionTypes';

const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

const userActions = {
  setCurrentUser,
};

export default userActions;
