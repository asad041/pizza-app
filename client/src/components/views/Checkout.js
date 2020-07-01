import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { submitOrderAction } from '../../store/actions';
import EmptyBag from './EmptyBag';
import Summary from './Summary';
import PaymentMethod from './PaymentMethod';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import UserInfo from './auth/UserInfo';
import { Redirect } from 'react-router-dom';

const getPizzaValues = (cart) => {
  let pizzas = [];
  cart.map((pizza) => {
    pizzas.push({
      _pizzaId: pizza._id,
      quantity: pizza.quantity,
      price: pizza.price,
    });
  });
  return { pizzas };
};
const Checkout = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const { isAuthenticated, user, cart, quantity, orderSubmitted } = useSelector(
    (state) => state.context
  );
  const dispatch = useDispatch();

  const submitOrderHandler = () => {
    dispatch(submitOrderAction(getPizzaValues(cart)));
  };

  if (orderSubmitted) {
    return <Redirect to='/app/my-orders' />;
  }

  if (!quantity || quantity < 1) {
    return <EmptyBag />;
  }

  return (
    <div className='container mt-4'>
      <section className='section'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card shadow'>
              <div className='card-body'>
                <h5 className='card-title'>Delivery method</h5>
                {!isAuthenticated && (
                  <p>
                    <button
                      className='btn btn-success btn-sm btn-block'
                      onClick={() => setDeliveryMethod('signin')}
                    >
                      Already a member?
                    </button>
                    <button
                      className='btn btn-dark btn-sm btn-block'
                      onClick={() => setDeliveryMethod('signup')}
                    >
                      New customer!
                    </button>
                  </p>
                )}
              </div>
              <div className='card-body'>
                {isAuthenticated && user ? (
                  <UserInfo />
                ) : (
                  <>
                    {deliveryMethod === 'signin' && <Signin />}
                    {deliveryMethod === 'signup' && <Signup />}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <PaymentMethod />
          </div>
          <div className='col-md-4'>
            <Summary>
              {isAuthenticated && user && (
                <div className='card-body'>
                  <button
                    className='btn btn-primary btn-sm btn-block'
                    onClick={() => submitOrderHandler()}
                  >
                    Submit order
                  </button>
                </div>
              )}
            </Summary>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
