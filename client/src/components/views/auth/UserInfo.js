import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const { user } = useSelector((state) => state.context);
  return (
    <ul className='list-group list-group-flush'>
      <li className='list-group-item'>
        <span>Name:</span>
        <span className='float-right'>{user.fullname}</span>
      </li>
      <li className='list-group-item'>
        <span>Email:</span>
        <span className='float-right'>{user.email}</span>
      </li>
      <li className='list-group-item'>
        <span>Phone:</span>
        <span className='float-right'>{user.phone}</span>
      </li>
      <li className='list-group-item text-right'>
        <span>{user.address}</span>
      </li>
    </ul>
  );
};

export default UserInfo;
