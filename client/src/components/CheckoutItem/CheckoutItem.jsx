import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import cartActions from '../../redux/cart/cartActions';

import './CheckoutItem.scss';

function CheckoutItem({ cartItem, addItem, removeItem, clearItem }) {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Cart item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {/* eslint-disable-next-line */}
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        {/* eslint-disable-next-line */}
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      {/* eslint-disable-next-line */}
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
}

CheckoutItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    quantity: PropTypes.number,
  }),
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
  clearItem: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(cartActions.addItem(item)),
  removeItem: item => dispatch(cartActions.removeItem(item)),
  clearItem: item => dispatch(cartActions.clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
