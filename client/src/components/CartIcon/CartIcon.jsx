import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { ReactSVG } from 'react-svg';

import cartActions from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import './CartIcon.scss';

function CartIcon({ toggleCartHidden, cartItemsCount }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ReactSVG
        className="shopping-icon"
        src={`${process.env.PUBLIC_URL}/icons/shopping-bag.svg`}
      />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
}

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func,
  cartItemsCount: PropTypes.number,
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(cartActions.toggleCartHidden()),
});

const mapStateToProps = state => ({
  cartItemsCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
