import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { baseCurrency } from '../../config';
import ReviewOrder from './ReviewOrder';
import CheckoutTabs from './CheckoutTabs';

const Checkout = (props) => {
  const { cart, quantity, total } = useSelector((state) => state.context);

  return (
    <section className='pb-20 mt-5'>
      <div className='container mx-auto px-4'>
        <CheckoutTabs />
      </div>
    </section>
  );
};

Checkout.propTypes = {};

export default Checkout;
