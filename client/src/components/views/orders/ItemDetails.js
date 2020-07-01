import React from 'react';
import PropTypes from 'prop-types';
import { baseCurrency } from '../../../config';

const ItemDetails = ({ pizza }) => {
  return (
    <div className='media'>
      <img className='cart-image mr-3' src={pizza.image} alt='pizza' />
      <div className='media-body'>
        <p className='mt-0 mb-0 font-weight-bold'>{pizza.name}</p>
        <p>
          <span className='text-muted'>Quantity:</span> {pizza.quantity},{' '}
          <span className='text-muted'>Price:</span> {baseCurrency}
          {pizza.price ? parseFloat(pizza.price).toFixed(2) : pizza.price}/pizza
        </p>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default ItemDetails;
