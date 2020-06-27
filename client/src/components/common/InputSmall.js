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
    <div className='relative flex w-full flex-wrap items-stretch mb-3'>
      <input
        type='number'
        placeholder='Quantity'
        className='px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline pl-2'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className='bg-gray-900 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none absolute right-0 -mr-0'
        type='button'
        style={{ transition: 'all .15s ease' }}
        onClick={() => handleAddToCart(pizza)}
      >
        Add to order
      </button>
    </div>
  );
};

InputSmall.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default InputSmall;
