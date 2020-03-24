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

const removeItem = item => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

const clearItemFromCart = item => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item.id,
});

const cartActions = {
  toggleCartHidden,
  setCartHidden,
  addItem,
  removeItem,
  clearItemFromCart,
};

export default cartActions;
