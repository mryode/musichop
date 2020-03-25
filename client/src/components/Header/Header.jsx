import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/userSelectors';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import './Header.scss';

function Header({ currentUser, signOut }) {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/" className="header-link">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
        </Link>
      </div>
      <div className="header-links">
        <Link to="/shop" className="header-link">
          SHOP
        </Link>
        <Link to="/" className="header-link">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="header-link" onClick={signOut}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="header-link">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      <CartDropdown />
    </header>
  );
}

Header.propTypes = {
  currentUser: PropTypes.object,
  signOut: PropTypes.func,
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(Header);
