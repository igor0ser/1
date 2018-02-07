import React from 'react';
import PropTypes from 'prop-types';
import './Error.css';

const ErrorComp = ({ message }) => (
  <div className="Error">
    <i className="fa fa-meh-o" />
    Oops, error happened.{' '}
    {message}.
  </div>
);

ErrorComp.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorComp;
