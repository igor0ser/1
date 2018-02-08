import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FetchResult from '../FetchResult';
import FetchButton from '../FetchButton/FetchButton';
import * as actions from './Fetcher4.duck';

class Fetcher4 extends PureComponent {
  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    const { error, fetching, data, getUsers } = this.props;

    return (
      <div className="Fetcher4">
        <h3>Fetching with redux-thunk</h3>
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

Fetcher4.propTypes = {
  error: PropTypes.string,
  fetching: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = ({ fetcher4: { error, fetching, data } }) =>
  ({ error, fetching, data });

const mapDispatchToProps = { getUsers: actions.getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Fetcher4);
