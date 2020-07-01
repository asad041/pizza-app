import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import OrderDetails from './OrderDetails';
import LoadingSpinner from '../../common/LoadingSpinner';
import NoRecordFoud from '../../common/NoRecordFound';
import { getOrdersAction } from '../../../store/actions';
import { isIterableArray } from '../../../utils/utils';

const MyOrders = () => {
  const { isAuthenticated, gettingOrders, orders } = useSelector(
    (state) => state.context
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersAction());
  }, []);

  if (!isAuthenticated) {
    return <Redirect to='/sign-in' />;
  }

  return (
    <div className='container mt-4'>
      <section className='section'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            {gettingOrders ? (
              <LoadingSpinner />
            ) : (
              <>
                {isIterableArray(orders) &&
                  orders.map((order) => (
                    <OrderDetails key={order._id} order={order} />
                  ))}
                {orders.length === 0 && (
                  <NoRecordFoud title='Your orders bag is empty!' />
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyOrders;
