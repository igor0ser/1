import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';
import './Nav.css';

const Nav = ({ links }) => (
  <nav>
    <ul className="NavList">
      {links.map(({ to, text }) => (
        <NavLink key={to} to={to} text={text} />
      ))}
    </ul>
    <hr />
  </nav>
);

Nav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  })).isRequired,
};

export default Nav;
