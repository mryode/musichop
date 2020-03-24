import React from 'react';
import PropTypes from 'prop-types';

import './CheckoutItem.scss';

function CheckoutItem({ cartItem: { name, price, imageUrl, quantity } }) {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Cart item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
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
};

export default CheckoutItem;
