import React from 'react';
import PropTypes from 'prop-types';

const TextareaField = ({ input, required, meta: { touched, error } }) => (
  <div className='form-input'>
    <textarea
      {...input}
      required={required}
      className='form-control'
      rows='2'
    />
  </div>
);

TextareaField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  required: PropTypes.bool,
};

export default TextareaField;
