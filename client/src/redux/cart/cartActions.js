import { cartActionTypes } from './cartActionTypes';

const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

const cartActions = {
  toggleCartHidden,
};

export default cartActions;
