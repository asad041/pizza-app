import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputSmall from '../common/InputSmall';
import { baseCurrency } from '../../config';
import { getMenuAction } from '../../store/actions';
import LoadingSpinner from '../common/LoadingSpinner';

const RenderCard = ({ pizza }) => (
  <div className='col-md-3'>
    <div className='card shadow'>
      <div className='menu-ribbon'>
        Price: {baseCurrency}
        {pizza.price}
      </div>
      <img className='card-img-top' src={pizza.image} alt='pizza' />
      <div className='card-body'>
        <h5 className='card-title'>{pizza.name}</h5>
        <p className='card-text'>{pizza.description}</p>
        <InputSmall pizza={pizza} />
      </div>
    </div>
  </div>
);

const PizzaMenu = () => {
  const { gettingMenu, menu } = useSelector((state) => state.context);
  const dispatch = useDispatch();

  useEffect(() => {
    if (menu.length === 0) dispatch(getMenuAction());
  }, [dispatch]);

  return (
    <div className='container mt-4'>
      <section className='section'>
        <div className='row'>
          {gettingMenu ? (
            <LoadingSpinner />
          ) : (
            menu.map((pizza) => <RenderCard key={pizza._id} pizza={pizza} />)
          )}
        </div>
      </section>
    </div>
  );
};

export default PizzaMenu;
