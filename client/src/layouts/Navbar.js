import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { baseCurrency } from '../config';

const Navbar = () => {
  // const [showMenu, setShowMenu] = useState(false);
  const { quantity, total, isAuthenticated, user } = useSelector(
    (state) => state.context
  );

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
            <Link className='nav-link' to='/app/my-orders'>
              History
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link disabled' to='#/'>
              About us
            </Link>
          </li>
        </ul>
        <Link to='/app/my-cart' className='btn btn-success my-2 btn-sm'>
          Cart ({quantity}) - {baseCurrency}
          {total.toFixed(2)}
        </Link>
        {isAuthenticated && user && (
          <Link to='#/account' className='btn btn-primary ml-2 my-2 btn-sm'>
            {user.fullname}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
