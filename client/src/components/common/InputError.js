import React from 'react';
import PropTypes from 'prop-types';

const InputError = ({ error }) => (
  <small className='invalid-feedback fw--5'>{error}</small>
);

InputError.propTypes = {
  error: PropTypes.string,
};

export default InputError;
