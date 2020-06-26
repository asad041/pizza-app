import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { addToCartAction } from '../../store/actions';
import { baseCurrency } from '../../config';

const data = [
  {
    _id: 'pizza1',
    name: 'Italiano',
    description:
      'Beef Pepperoni, Mushrooms, Italian Sausage, Mozzarella & Signature Pizza Sauce.',
    price: 10.5,
    image:
      'https://image.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg',
  },
  {
    _id: 'pizza2',
    name: 'Red Pepper Chicken',
    description:
      'Extreme Sauce, Mozzarella Cheese, Fiery Chicken Strips, Red Bell Pepper, Slice onion, Chopped Jalapeno',
    price: 20.5,
    image:
      'https://image.freepik.com/free-photo/pizza-with-meat-stuffing-tomato-slices_114579-3532.jpg',
  },
];

const PizzaMenu = (props) => {
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(addToCartAction(id));
  };

  return (
    <section className='pb-20 -mt-20'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap items-center mt-32'>
          {data.map((pizza) => (
            <div key={pizza.id} className='w-full md:w-3/12 px-4'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600'>
                <img
                  alt='...'
                  src={pizza.image}
                  className='w-full align-middle rounded-t-lg'
                />
                <blockquote className='relative p-8 mb-2'>
                  <svg
                    preserveAspectRatio='none'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 583 95'
                    className='absolute left-0 w-full block'
                    style={{
                      height: '95px',
                      top: '-94px',
                    }}
                  >
                    <polygon
                      points='-30,95 583,95 583,65'
                      className='text-pink-600 fill-current'
                    ></polygon>
                  </svg>
                  <h4 className='text-xl font-bold text-white'>{pizza.name}</h4>
                  <p className='text-md font-light mt-2 text-white mb-4'>
                    {pizza.description}
                  </p>
                  <div className='mx-auto'>
                    <button
                      className='bg-pink-900 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1'
                      type='button'
                      style={{ transition: 'all .15s ease' }}
                    >
                      {baseCurrency}
                      {pizza.price.toFixed(2)}
                    </button>
                    <button
                      className='bg-gray-900 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 float-right'
                      type='button'
                      style={{ transition: 'all .15s ease' }}
                      onClick={() => handleAddToCart(pizza)}
                    >
                      Add to order
                    </button>
                  </div>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

PizzaMenu.propTypes = {};

export default PizzaMenu;
