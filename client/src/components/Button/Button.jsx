import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({
  children,
  type = 'button',
  onClick = null,
  isGoogleButton = false,
  inverted = false,
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={
      'custom-button' +
      `${isGoogleButton ? ' google-button' : ''}` +
      `${inverted ? ' inverted-button' : ''}`
    }
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
  inverted: PropTypes.bool,
};

export default Button;
