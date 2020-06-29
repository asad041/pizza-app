import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { baseCurrency } from '../../config';
import ReviewOrder from './ReviewOrder';
import CheckoutTabs from './CheckoutTabs';
const openTab = 1;
const Checkout = (props) => {
  const { cart, quantity, total } = useSelector((state) => state.context);

  return (
    <section className='pb-20 mt-5'>
      <div className='container mx-auto px-4'>
        <CheckoutTabs />
        <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
          <div className='px-4 py-5 flex-auto'>
            <div className='tab-content tab-space'>
              <div className={openTab === 1 ? 'block' : 'hidden'} id='link1'>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits.
                  <br />
                  <br /> Dramatically visualize customer directed convergence
                  without revolutionary ROI.
                </p>
              </div>
              <div className={openTab === 2 ? 'block' : 'hidden'} id='link2'>
                <p>
                  Completely synergize resource taxing relationships via premier
                  niche markets. Professionally cultivate one-to-one customer
                  service with robust ideas.
                  <br />
                  <br />
                  Dynamically innovate resource-leveling customer service for
                  state of the art customer service.
                </p>
              </div>
              <div className={openTab === 3 ? 'block' : 'hidden'} id='link3'>
                <p>
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas.
                  <br />
                  <br /> Dramatically maintain clicks-and-mortar solutions
                  without functional solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Checkout.propTypes = {};

export default Checkout;
