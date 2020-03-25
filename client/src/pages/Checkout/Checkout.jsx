import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton';

import './Checkout.scss';

function Checkout({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVC: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
}

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number,
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state),
});

export default connect(mapStateToProps)(Checkout);
