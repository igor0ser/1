import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../duck';

const Counter = ({ counter = 1, _increment, _decrement, _reset }) => (
  <div
    className="Counter"
  >
    <button onClick={_decrement}>-</button>
    <button onClick={_reset}>{counter}</button>
    <button onClick={_increment}>+</button>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  _increment: PropTypes.func.isRequired,
  _decrement: PropTypes.func.isRequired,
  _reset: PropTypes.func.isRequired,
};

const mapStateToProps = ({ counter }) => ({ counter });

const mapDispatchToProps = {
  _increment: increment,
  _decrement: decrement,
  _reset: reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
