import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { baseCurrency } from '../../config';

const Checkout = (props) => {
  const { cart, quantity, total } = useSelector((state) => state.context);
  return (
    <div>
      {baseCurrency}
      {total.toFixed(2)}
    </div>
  );
};

Checkout.propTypes = {};

export default Checkout;
