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

  const handleInputChange = ({ target }) => setInputValue(target.value);

  return (
    <div className='form-group'>
      <div class='col-auto'>
        <div class='input-group mb-2'>
          <input
            type='number'
            placeholder='Quantity'
            className='form-control form-control-sm'
            value={inputValue}
            onChange={handleInputChange}
          />
          <div class='input-group-prepend'>
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
