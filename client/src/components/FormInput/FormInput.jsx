import React from 'react';
import PropTypes from 'prop-types';

import './FormInput.scss';

const FormInput = ({ required, type, name, id, value, onChange, label }) => (
  <div className="form-group">
    <input
      id={id}
      className="form-input"
      required={required}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
    {label ? (
      <label
        htmlFor={id}
        className={`form-input-label ${value.length ? 'shrink' : ''}`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

FormInput.propTypes = {
  required: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default FormInput;
