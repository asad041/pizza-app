import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { addToCartAction } from '../../store/actions';
import { baseCurrency } from '../../config';
import InputSmall from '../common/InputSmall';

const data = [
  {
    _id: '5efbdfc2c10c1b6a22b3c754',
    name: 'Italiano',
    description:
      'Beef Pepperoni, Mushrooms, Italian Sausage, Mozzarella & Signature Pizza Sauce.',
    price: 8.5,
    image:
      'https://image.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg',
  },
  {
    _id: '5efbe054c10c1b6a22b3c755',
    name: 'Red Pepper Chicken',
    description:
      'Extreme Sauce, Mozzarella Cheese, Fiery Chicken Strips, Red Bell Pepper, Slice onion, Chopped Jalapeno',
    price: 5,
    image:
      'https://image.freepik.com/free-photo/pizza-with-meat-stuffing-tomato-slices_114579-3532.jpg',
  },
];

const RenderCard = ({ pizza }) => (
  <div className='col-md-3'>
    <div className='card shadow'>
      <div className='menu-ribbon'>
        Price: {baseCurrency}
        {pizza.price}
      </div>
      <img className='card-img-top' src={pizza.image} alt='Card image cap' />
      <div className='card-body'>
        <h5 className='card-title'>{pizza.name}</h5>
        <p className='card-text'>{pizza.description}</p>
        <InputSmall pizza={pizza} />
      </div>
    </div>
  </div>
);

const PizzaMenu = (props) => {
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(addToCartAction(id));
  };

  return (
    <div className='container mt-4'>
      <section className='section'>
        <div className='row'>
          {data.map((pizza) => (
            <RenderCard key={pizza._id} pizza={pizza} />
          ))}
        </div>
      </section>
    </div>
  );
};

PizzaMenu.propTypes = {};

export default PizzaMenu;
