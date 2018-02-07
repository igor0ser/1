import React from 'react';
import PropTypes from 'prop-types';
import './Error.css';

const Error = ({ errorMessage }) => (
  <div className="Error">
    {errorMessage}
  </div>
);

Error.propTypes = {
  val
};

export default Error;
