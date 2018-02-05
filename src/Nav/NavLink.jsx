import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as DefaultNavLink } from 'react-router-dom';
import './NavLink.css';

const NavLink = ({ to, text }) => (
  <li>
    <DefaultNavLink
      exact
      className="NavLink"
      activeClassName="NavLink_active"
      to={to}
    >
      {text}
    </DefaultNavLink>
  </li>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavLink;
