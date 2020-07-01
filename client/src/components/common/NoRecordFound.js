import React from 'react';
import PropTypes from 'prop-types';

function NoRecordFound({ title }) {
  return <h3 className='card-title text-center'>{title}</h3>;
}

NoRecordFound.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NoRecordFound;
