import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './Counter.duck';

const Counter = ({ counter = 1, increment, decrement, reset }) => (
  <div className="Counter">
    <button onClick={decrement}>-</button>
    <button onClick={reset}>{counter}</button>
    <button onClick={increment}>+</button>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

const mapStateToProps = ({ counter }) => ({ counter });

const { increment, decrement, reset } = actions;
const mapDispatchToProps = { increment, decrement, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
