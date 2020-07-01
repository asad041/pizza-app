import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { baseCurrency } from '../../config';
import { updateCartAction, removeFromCartAction } from '../../store/actions';

const CartItem = ({ pizza }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(pizza.quantity);

  const handleInputChange = ({ target: { value } }) => {
    if (parseInt(value) < 1) return;

    setInputValue(value);
    dispatch(updateCartAction({ ...pizza, quantity: parseInt(value) }));
  };

  const handleRemoveCart = () => {
    dispatch(removeFromCartAction({ ...pizza }));
  };

  return (
    <div className='row align-items-center p-2 border-bottom'>
      <div className='col-6'>
        <div className='media align-items-center'>
          <img src={pizza.image} alt='pizza' className='cart-image mr-2' />
          <div className='media-body'>
            <h5 className='mb-0'>{pizza.name}</h5>
          </div>
        </div>
      </div>
      <div className='col d-flex justify-content-end align-items-end'>
        <input
          type='number'
          placeholder='Quantity'
          className='form-control form-control-sm mr-2'
          value={inputValue}
          onChange={handleInputChange}
          style={{ maxWidth: '50px' }}
        />
        <div className='text-right'>
          <span className='mr-2'>
            X {baseCurrency}
            {pizza.price}
          </span>
          <Link to='#/remove-pizza' onClick={() => handleRemoveCart()}>
            <i className='fas fa-trash'></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default CartItem;
