import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import './Accordion.css';

const AccordionView = ({ children, expanded, toggle }) => (
  <div className="Accordion">
    <button onClick={toggle}>
      {expanded ? 'Hide' : 'Show'}
    </button>
    <CSSTransitionGroup
      transitionName="Accordion__content"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      component={Fragment}
    >
      {expanded && (
        <div className="Accordion__content">
          {children}
        </div>
      )}
    </CSSTransitionGroup>
  </div>
);

AccordionView.propTypes = {
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default AccordionView;

