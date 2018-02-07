import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

const User = ({
  name: { title, first, last },
  picture: { thumbnail },
}) => (
  <div
    className="User"
  >
    {title} {first} {last}
    <img src={thumbnail} alt={`${first} ${last}`} />
  </div>
);

User.propTypes = {
  name: PropTypes.shape({
    title: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
  }).isRequired,
  picture: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
