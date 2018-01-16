import React, { Fragment } from 'react';
import { withStateHandlers } from 'recompose';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import './Accordion.css';

const AccordionPure = ({ children, expanded, toggle }) => (
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

const Accordion = withStateHandlers(
  { expanded: false },
  { toggle: ({ expanded }) => () => ({ expanded: !expanded })}
)(AccordionPure);

export default Accordion;

