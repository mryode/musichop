import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {
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
      </div>
    </header>
  );
}

export default Header;
