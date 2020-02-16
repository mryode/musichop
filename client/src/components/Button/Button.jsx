import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, type, onClick, isGoogleButton }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={`${isGoogleButton ? 'google-button' : ''} custom-button`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
  isGoogleButton: PropTypes.bool,
};

export default Button;
