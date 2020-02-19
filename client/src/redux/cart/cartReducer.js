import { cartActionTypes } from './cartActionTypes';

const initialState = {
  hidden: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};
