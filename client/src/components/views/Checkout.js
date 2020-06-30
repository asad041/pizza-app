import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Summary from './Summary';
import PaymentMethod from './PaymentMethod';
import Signin from './auth/Signin';
import Signup from './auth/Signup';

const Checkout = (props) => {
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const { cart, quantity, total } = useSelector((state) => state.context);

  return (
    <div className='container mt-4'>
      <section className='section'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card shadow'>
              <div className='card-body'>
                <h5 className='card-title'>Delivery method</h5>
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
              </div>
              <div className='card-body'>
                {deliveryMethod === 'signin' && <Signin />}
                {deliveryMethod === 'signup' && <Signup />}
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <PaymentMethod />
          </div>
          <div className='col-md-4'>
            <Summary>
              <div className='card-body'>
                <Link
                  to='/check-out'
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

Checkout.propTypes = {};

export default Checkout;
