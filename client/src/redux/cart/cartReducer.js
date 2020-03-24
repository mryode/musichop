import { cartActionTypes } from './cartActionTypes';
import { addItemToCart, removeItemFromCart } from './cartUtils';

const initialState = {
  hidden: true,
  cartItems: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case cartActionTypes.SET_CART_HIDDEN:
      return { ...state, hidden: payload };

    case cartActionTypes.ADD_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };

    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };

    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== payload),
      };

    default:
      return state;
  }
};
