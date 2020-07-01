import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Signin from './Signin';

const AuthLayout = () => {
  const { isAuthenticated } = useSelector((state) => state.context);

  if (isAuthenticated) {
    return <Redirect to='/app/my-orders' />;
  }

  return (
    <div className='container mt-4'>
      <section className='section'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card shadow'>
              <div className='card-body p-5'>
                <Signin />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthLayout;
