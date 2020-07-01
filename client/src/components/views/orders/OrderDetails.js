import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { baseCurrency } from '../../../config';
import { dateFormatter } from '../../../utils/utils';
import ItemDetails from './ItemDetails';

const OrderDetails = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='card shadow'>
      <div className='card-header'>
        <div className='row'>
          <div className='col-md-2'>
            <p className='text-muted mb-0 small'>Order Placed</p>
            <p className='mb-0 font-weight-bold'>
              {dateFormatter(order.createdAt)}
            </p>
          </div>
          <div className='col-md-1'>
            <p className='text-muted mb-0 small'>Total</p>
            <p className='mb-0 font-weight-bold'>
              {baseCurrency}
              {order.total.toFixed(2)}
            </p>
          </div>
          <div className='col-md-2'>
            <p className='text-muted mb-0 small'>Status</p>
            <p className='mb-0 font-weight-bold'>
              {order.status.toUpperCase()}
            </p>
          </div>
          <div className='col text-right'>
            <p className='text-muted mb-0 small'>Order# {order._id}</p>
            <p className='mb-0 font-weight-bold'>
              <Link
                to='#/details'
                className='small font-weight-bold'
                onClick={() => setIsOpen(!isOpen)}
              >
                Order details
              </Link>
            </p>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='card-body'>
          <h5 className='card-title'>
            Updated: {dateFormatter(order.updatedAt)}
          </h5>
          {order.pizzas.map((pizza, key) => (
            <ItemDetails key={key} pizza={pizza} />
          ))}
        </div>
      )}
    </div>
  );
};

OrderDetails.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderDetails;
