import { cartActionTypes } from './cartActionTypes';

const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

const cartActions = {
  toggleCartHidden,
  addItem,
};

export default cartActions;
