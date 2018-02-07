import React from 'react';
import PropTypes from 'prop-types';
import './FetchButton.css';

const FetchButton = ({ onClick, fetching }) => (
  <button
    className="FetchButton"
    disabled={fetching}
    onClick={onClick}
  >
    refetch
    &nbsp;
    <i className="fa fa-refresh" />
  </button>
);

FetchButton.propTypes = {
  fetching: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FetchButton;
