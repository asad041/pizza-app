import React from 'react';
import PropTypes from 'prop-types';

function LoadingSpinner(props) {
  const { color } = props;
  return (
    <div className='d-flex justify-content-center'>
      <div
        className={`spinner-border ${color ? color : 'text-secondary'}`}
        role='status'
      >
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
}

LoadingSpinner.propTypes = {
  color: PropTypes.string,
};

export default LoadingSpinner;
