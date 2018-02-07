import React from 'react';
import PropTypes from 'prop-types';
import './Error.css';

const Err = ({ message }) => (
  <div className="Error">
    <i className="fa fa-meh-o" />
    Oops, error happened.{' '}
    {message}.
  </div>
);

Err.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Err;
