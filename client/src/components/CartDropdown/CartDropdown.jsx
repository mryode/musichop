import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import cartActions from '../../redux/cart/cartActions';

import useOnClickOutside from '../../hooks/useOnClickOutside';

import Button from '../Button/Button';

import './CartDropdown.scss';

function CartDropdown({ hidden, setCartHidden }) {
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
      <div className="cart-item" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

CartDropdown.propTypes = {
  hidden: PropTypes.bool,
  setCartHidden: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  setCartHidden: hidden => dispatch(cartActions.setCartHidden(hidden)),
});

const mapStateToProps = state => ({
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
