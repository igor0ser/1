import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FetchResult from '../FetchResult';
import FetchButton from '../FetchButton/FetchButton';
import * as actions from './Fetcher3.duck';

class Fetcher3 extends PureComponent {
  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    const { error, fetching, data, getUsers } = this.props;

    return (
      <div className="Fetcher3">
        <h3>Fetching with redux-promise-middleware</h3>
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

Fetcher3.propTypes = {
  error: PropTypes.string,
  fetching: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = ({ fetcher3: { error, fetching, data } }) =>
  ({ error, fetching, data });

const mapDispatchToProps = { getUsers: actions.getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Fetcher3);
