import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ input, required, meta: { touched, error } }) => (
  <div className='form-input'>
    <input {...input} required={required} className='form-control' />
  </div>
);

InputField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  required: PropTypes.bool,
};

export default InputField;
