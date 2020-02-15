import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, type }) => (
  // eslint-disable-next-line react/button-has-type
  <button className="custom-button" type={type}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Button;
