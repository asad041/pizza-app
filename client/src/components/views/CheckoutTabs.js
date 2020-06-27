import React, { useState } from 'react';

const tabs = [
  { id: 1, text: 'Billing Address' },
  { id: 2, text: 'Payment method' },
  { id: 3, text: 'Order Review' },
];

const CheckoutTabs = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className='flex flex-wrap'>
      <div className='w-full'>
        <ul
          className='flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row'
          role='tablist'
        >
          {tabs.map(({ id, text }) => (
            <li
              key={id}
              className='-mb-px mr-2 last:mr-0 flex-auto text-center'
            >
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === id
                    ? 'text-white bg-pink-600'
                    : 'text-pink-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(id);
                }}
                data-toggle='tab'
                href='#link1'
                role='tablist'
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckoutTabs;
