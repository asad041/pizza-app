import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { baseCurrency } from '../config';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { quantity, total } = useSelector((state) => state.context);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>
        Pizza Point
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              Menu
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/my-orders'>
              History
            </Link>
          </li>
          <li className='nav-item'>
            <a className='nav-link disabled' href='#'>
              About us
            </a>
          </li>
        </ul>
        <Link to='/my-cart' className='btn btn-success my-2 btn-sm'>
          Cart ({quantity}) - {baseCurrency}
          {total.toFixed(2)}
        </Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
