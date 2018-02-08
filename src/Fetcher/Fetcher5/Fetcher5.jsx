import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FetchResult from '../FetchResult';
import FetchButton from '../FetchButton/FetchButton';
import { dispatchGetUsers } from './Fetcher5.duck';

class Fetcher5 extends PureComponent {
  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    const { error, fetching, data, getUsers } = this.props;

    return (
      <div className="Fetcher5">
        <h3>Fetching with redux-saga</h3>
        <FetchButton
          onClick={getUsers}
          fetching={fetching}
        />
        <br />
        <FetchResult
          error={error}
          fetching={fetching}
          data={data}
        />
      </div>
    );
  }
}

Fetcher5.propTypes = {
  error: PropTypes.string,
  fetching: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = ({ fetcher5: { error, fetching, data } }) =>
  ({ error, fetching, data });

const mapDispatchToProps = { getUsers: dispatchGetUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Fetcher5);
