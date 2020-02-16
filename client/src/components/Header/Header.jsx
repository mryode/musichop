import React from 'react';
import { Link } from 'react-router-dom';

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

export default Header;
