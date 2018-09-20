import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Fetcher from '../Fetcher/Fetcher3/Fetcher3';
import * as actions from './Counter.duck';

class Counter extends React.Component {
  componentWillReceiveProps(newProps) {
    console.group('componentWillReceiveProps');
    console.log(newProps.counter);
    console.log(newProps.error);
    console.groupEnd();
  }
  render() {
    const { counter, increment, decrement, reset } = this.props;
    return (
      <div className="Counter">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>{counter}</button>
        <button onClick={increment}>+</button>
        <Fetcher />
      </div>
    );
  }
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  counter: store.counter,
  error: store.fetcher3.error,
});

const { increment, decrement, reset } = actions;
const mapDispatchToProps = { increment, decrement, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
