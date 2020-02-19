import React from 'react';

import { connect } from 'react-redux';
import { ReactSVG } from 'react-svg';

import cartActions from '../../redux/cart/cartActions';

import './CartIcon.scss';

function CartIcon({ toggleCartHidden }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ReactSVG
        className="shopping-icon"
        src={`${process.env.PUBLIC_URL}/icons/shopping-bag.svg`}
      />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(cartActions.toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
