import React from 'react';
import PropTypes from 'prop-types';

const PaymentMethod = ({ children }) => {
  return (
    <div className='card shadow'>
      <div className='card-body'>
        <h5 className='card-title'>Payment methods</h5>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <i className='fas fa-check-circle text-success'></i> Cash on
            delivery <br />
            <small className='text-muted'>
              (Soon we will add more payment options)
            </small>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

PaymentMethod.propTypes = {
  children: PropTypes.node,
};

export default PaymentMethod;
