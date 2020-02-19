import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.scss';

function Header({ currentUser, handleSignOutClick }) {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/" className="header-link">
          MUSICHOP
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
          <div className="header-link" onClick={handleSignOutClick}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="header-link">
            SIGN IN
          </Link>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  currentUser: PropTypes.object,
  handleSignOutClick: PropTypes.func,
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
