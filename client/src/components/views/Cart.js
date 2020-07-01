import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import Summary from './Summary';
import EmptyBag from './EmptyBag';

const Cart = () => {
  const { cart, quantity } = useSelector((state) => state.context);

  if (!quantity || quantity < 1) {
    return <EmptyBag />;
  }

  return (
    <div className='container mt-4'>
      <section className='section'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='card shadow'>
              <div className='card-body'>
                <h5 className='card-title'>
                  Order bag{' '}
                  <small className='text-muted'>({quantity} Pizzas)</small>
                </h5>
                {cart.map((pizza) => (
                  <CartItem key={pizza._id} pizza={pizza} />
                ))}
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <Summary>
              <div className='card-body'>
                <Link
                  to='/app/check-out'
                  className='btn btn-primary btn-sm btn-block'
                >
                  Checkout
                </Link>
              </div>
            </Summary>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
