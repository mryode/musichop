import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import './Checkout.scss';

function Checkout({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-blocke">
          <span>Product</span>
        </div>
        <div className="header-blocke">
          <span>Description</span>
        </div>
        <div className="header-blocke">
          <span>Quantity</span>
        </div>
        <div className="header-blocke">
          <span>Price</span>
        </div>
        <div className="header-blocke">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
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
