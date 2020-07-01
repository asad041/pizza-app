import React from 'react';
import { Link } from 'react-router-dom';

const EmptyBag = () => {
  return (
    <div className='container mt-4'>
      <section className='section'>
        <div className='row'>
          <div className='col'>
            <div className='card shadow'>
              <div className='card-body text-center p-5'>
                <h5 className='card-title'>Order bag</h5>
                <p>
                  <i className='fas fa-pizza-slice fa-5x text-warning'></i>
                </p>
                <p>
                  You have no PIZZA in your order bag, click{' '}
                  <Link to='/'>here</Link> to add your favorite pizza from the
                  menu
                </p>
                <p>
                  To check your oder history, click{' '}
                  <Link to='/app/my-orders'>here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmptyBag;
