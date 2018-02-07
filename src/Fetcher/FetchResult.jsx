import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader/Loader';
import User from './User/User';
import Err from './Error/Error';

const FetchResult = ({ error, fetching, data }) => {
  if (error) return <Err message={error} />;
  if (fetching) return <Loader />;
  if (!data) return null;
  return data.map(user => <User {...user} key={user.email} />);
};

FetchResult.propTypes = {
  error: PropTypes.string,
  fetching: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

export default FetchResult;
