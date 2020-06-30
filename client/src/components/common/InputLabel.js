import React from 'react';
import PropTypes from 'prop-types';

const InputLabel = ({ text, className }) => (
  <label className={className}>{text}</label>
);

InputLabel.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

InputLabel.defaultProps = {
  className: '',
};

export default InputLabel;
