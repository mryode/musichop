import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/userSelectors';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import './Header.scss';
import userActions from '../../redux/user/userActions';

function Header({ currentUser, signOutStart }) {
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
        <Link to="/contact" className="header-link">
          CONTACT
        </Link>
        {currentUser ? (
          // eslint-disable-next-line
          <div className="header-link" onClick={signOutStart}>
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
  signOutStart: PropTypes.func,
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(userActions.signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
