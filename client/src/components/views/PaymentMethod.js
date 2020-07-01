import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const PaymentMethod = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.context);

  return (
    <div className='card shadow'>
      <div className='card-body'>
        <h5 className='card-title'>Payment methods</h5>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <i
              className={`fas fa-check-circle text-${
                isAuthenticated && user ? 'success' : 'muted'
              }`}
            ></i>{' '}
            Cash on delivery <br />
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
