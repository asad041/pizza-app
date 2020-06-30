import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from './InputLabel';
import InputError from './InputError';

const InputField = ({
  input,
  required,
  label,
  type,
  placeholder,
  meta: { touched, error },
}) => (
  <div className='form-group'>
    {label && <InputLabel text={label} />}
    <input
      {...input}
      type={type}
      placeholder={placeholder}
      className={`form-control ${touched && error ? 'is-invalid' : ''}`}
      required={required}
    />
    {touched && error && <InputError error={error} />}
  </div>
);

InputField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  required: PropTypes.bool,
};

export default InputField;
