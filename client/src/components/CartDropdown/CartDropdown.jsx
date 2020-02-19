import React from 'react';

import { connect } from 'react-redux';

import Button from '../Button/Button';

import './CartDropdown.scss';

function CartDropdown({ hidden }) {
  return (
    <div
      className={`cart-dropdown cart-dropdown-${hidden ? 'hidden' : 'visible'}`}
    >
      <div className="cart-item" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

const mapStateToProps = state => ({
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(CartDropdown);
