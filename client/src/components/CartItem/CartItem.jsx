import React from 'react';
import PropTypes from 'prop-types';

import './CartItem.scss';

function CartItem({ item: { name, price, imageUrl, quantity } }) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={`${name}`} />
      <div className="cart-item-details">
        <span className="cart-item-name">{name}</span>
        <span className="cart-item-price">
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    quantity: PropTypes.number,
  }),
};

export default CartItem;
