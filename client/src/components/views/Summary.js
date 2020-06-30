import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { DeliveryCharges, baseCurrency } from '../../config';

const Summary = ({ children }) => {
  const { total } = useSelector((state) => state.context);

  return (
    <div className='card shadow'>
      <div className='card-body'>
        <h5 className='card-title'>Delivery charges</h5>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <i className='fas fa-check-circle text-success'></i> Express{' '}
            <small className='text-muted'>(40 mins)</small>
            <span className='float-right'>
              {baseCurrency}
              {DeliveryCharges.toFixed(2)}
            </span>
          </li>
        </ul>
        <hr />
        <h5 className='card-title'>Summary</h5>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            Subtotal:{' '}
            <span className='float-right'>
              {baseCurrency}
              {total.toFixed(2)}
            </span>
          </li>
          <li className='list-group-item'>
            Delivery Charges:{' '}
            <span className='float-right'>
              {baseCurrency}
              {DeliveryCharges.toFixed(2)}
            </span>
          </li>
          <li className='list-group-item font-weight-bold'>
            Total:{' '}
            <span className='float-right'>
              {baseCurrency}
              {(total + DeliveryCharges).toFixed(2)}
            </span>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

Summary.propTypes = {
  children: PropTypes.node,
};

export default Summary;
