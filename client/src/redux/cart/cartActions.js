import { cartActionTypes } from './cartActionTypes';

const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

const setCartHidden = hidden => ({
  type: cartActionTypes.SET_CART_HIDDEN,
  payload: hidden,
});

const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

const cartActions = {
  toggleCartHidden,
  setCartHidden,
  addItem,
};

export default cartActions;
