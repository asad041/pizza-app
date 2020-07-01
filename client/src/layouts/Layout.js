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
          <Route path='/app/my-cart' component={Cart} exact />
          <Route path='/app/check-out' component={Checkout} exact />
          <Route path='/app/my-orders' component={MyOrders} exact />
          <Route path='/app/sign-in' component={AuthLayout} exact />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Layout;
