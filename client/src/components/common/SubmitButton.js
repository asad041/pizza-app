import React from 'react';
import PropTypes from 'prop-types';

export const SubmitButton = ({
  text,
  submitting,
  disabled,
  buttonClick,
  children,
}) => (
  <div className={`form-group d-flex justify-content-end`}>
    {submitting ? (
      <div className='spinner-border text-secondary' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    ) : (
      <button
        className={`btn btn-primary btn-sm`}
        type='submit'
        disabled={disabled}
        onClick={buttonClick ? () => buttonClick : () => {}}
      >
        {children ? children : text}
      </button>
    )}
  </div>
);

SubmitButton.propTypes = {
  text: PropTypes.string,
  submitting: PropTypes.bool,
  disabled: PropTypes.bool,
  buttonClick: PropTypes.func,
  children: PropTypes.node,
};

export default SubmitButton;
