import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import PizzaMenu from '../components/views/PizzaMenu';
import Checkout from '../components/views/Checkout';

const Layout = (props) => {
  return (
    <>
      <Router fallback={<span />}>
        <Navbar />
        <Switch>
          <Route path='/' component={PizzaMenu} exact />
          <Route path='/check-out' component={Checkout} exact />
        </Switch>
      </Router>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
