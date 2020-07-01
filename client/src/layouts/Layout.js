import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import PizzaMenu from '../components/views/PizzaMenu';
import Checkout from '../components/views/Checkout';
import Cart from '../components/views/Cart';
import MyOrders from '../components/views/orders/MyOrders';
import AuthLayout from '../components/views/auth/AuthLayout';

const Layout = () => {
  return (
    <>
      <Router fallback={<span />}>
        <Navbar />
        <Switch>
          <Route path='/' component={PizzaMenu} exact />
          <Route path='/my-cart' component={Cart} exact />
          <Route path='/check-out' component={Checkout} exact />
          <Route path='/my-orders' component={MyOrders} exact />
          <Route path='/sign-in' component={AuthLayout} exact />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Layout;
