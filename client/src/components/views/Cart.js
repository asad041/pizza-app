import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = (props) => {
  const { cart, quantity, total } = useSelector((state) => state.context);

  return (
    <div className='container mt-4'>
      <section className='section'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='card shadow'>
              <div className='card-body'>
                <h5 className='card-title'>
                  My Cart{' '}
                  <small className='text-muted'>({quantity} Pizzas)</small>
                </h5>
                {cart.map((pizza) => (
                  <CartItem key={pizza._id} pizza={pizza} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
