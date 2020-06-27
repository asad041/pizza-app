import React from 'react';
import PropTypes from 'prop-types';

const InputSmall = () => {
  return (
    <div className='relative flex w-full flex-wrap items-stretch mb-3'>
      <input
        type='text'
        placeholder='Quantity'
        className='px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10'
      />
      <button
        className='bg-gray-900 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 float-right'
        type='button'
        style={{ transition: 'all .15s ease' }}
        // onClick={() => handleAddToCart(pizza)}
      >
        Add to order
      </button>
    </div>
  );
};

InputSmall.propTypes = {};

export default InputSmall;
