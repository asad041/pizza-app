import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { baseCurrency } from '../../config';
import { updateCartAction, removeFromCartAction } from '../../store/actions';

const CartItem = ({ pizza }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(pizza.quantity);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
    dispatch(updateCartAction({ ...pizza, quantity: parseInt(inputValue) }));
  };

  const handleRemoveCart = () => {
    dispatch(removeFromCartAction({ ...pizza }));
  };

  return (
    <div className='row align-items-center'>
      <div className='col-sm-6 col-5'>
        <div className='media align-items-center'>
          <img src={pizza.image} alt='pizza' className='cart-image mr-2' />
          <div className='media-body'>
            <h5 className='mb-0'>{pizza.name}</h5>
          </div>
        </div>
      </div>
      <div className='col-4 text-right'>
        <div class='input-group'>
          <input
            type='number'
            placeholder='Quantity'
            className='form-control form-control-sm'
            value={inputValue}
            onChange={handleInputChange}
            style={{ maxWidth: '50px' }}
          />
        </div>
      </div>
      <div className='col-auto text-right'>
        {baseCurrency}
        {pizza.price}x{pizza.quantity}
        <Link
          to='#/remove-pizza'
          className='ml-2'
          onClick={() => handleRemoveCart()}
        >
          <i className='fas fa-trash'></i>
        </Link>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default CartItem;
