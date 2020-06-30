import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCartAction } from '../../store/actions';

const InputSmall = ({ pizza }) => {
  const [inputValue, setInputValue] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = (p) => {
    dispatch(addToCartAction({ ...p, quantity: parseInt(inputValue) }));
    setInputValue(1);
  };

  const handleInputChange = ({ target: { value } }) => {
    if (parseInt(value) < 1) return;

    setInputValue(value);
  };

  return (
    <div className='form-group'>
      <div className='col-auto'>
        <div className='input-group mb-2'>
          <input
            type='number'
            placeholder='Quantity'
            className='form-control form-control-sm'
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className='input-group-prepend'>
            <button
              className='btn btn-dark btn-sm'
              type='button'
              style={{ transition: 'all .15s ease' }}
              onClick={() => handleAddToCart(pizza)}
            >
              Add to order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

InputSmall.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default InputSmall;
