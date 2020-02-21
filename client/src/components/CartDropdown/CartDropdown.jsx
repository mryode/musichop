import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import cartActions from '../../redux/cart/cartActions';

import useOnClickOutside from '../../hooks/useOnClickOutside';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import './CartDropdown.scss';

function CartDropdown({ hidden, setCartHidden, cartItems }) {
  useOnClickOutside(
    [
      document.querySelector('.cart-dropdown'),
      document.querySelector('.cart-icon'),
    ],
    () => setCartHidden(true)
  );

  return (
    <div
      className={`cart-dropdown cart-dropdown-${hidden ? 'hidden' : 'visible'}`}
    >
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

CartDropdown.propTypes = {
  hidden: PropTypes.bool,
  setCartHidden: PropTypes.func,
  cartItems: PropTypes.arrayOf(PropTypes.object),
};

const mapDispatchToProps = dispatch => ({
  setCartHidden: hidden => dispatch(cartActions.setCartHidden(hidden)),
});

const mapStateToProps = state => ({
  hidden: state.cart.hidden,
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
