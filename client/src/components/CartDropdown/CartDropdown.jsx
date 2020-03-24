import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import cartActions from '../../redux/cart/cartActions';
import {
  selectCartHidden,
  selectCartItems,
} from '../../redux/cart/cartSelectors';

import useOnClickOutside from '../../hooks/useOnClickOutside';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import './CartDropdown.scss';

function CartDropdown({ hidden, setCartHidden, cartItems, history }) {
  useOnClickOutside(
    [
      document.querySelector('.cart-dropdown'),
      document.querySelector('.cart-icon'),
    ],
    () => setCartHidden(true)
  );

  const handleGoToCheckout = () => {
    history.push('/checkout');
    setCartHidden(true);
  };

  return (
    <div
      className={`cart-dropdown cart-dropdown-${hidden ? 'hidden' : 'visible'}`}
    >
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="cart-empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
}

CartDropdown.propTypes = {
  hidden: PropTypes.bool,
  setCartHidden: PropTypes.func,
  cartItems: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  setCartHidden: hidden => dispatch(cartActions.setCartHidden(hidden)),
});

const mapStateToProps = state => ({
  hidden: selectCartHidden(state),
  cartItems: selectCartItems(state),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
