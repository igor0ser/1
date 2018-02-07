import React, { PureComponent } from 'react';
import FetchResult from '../FetchResult';
import FetchButton from '../FetchButton/FetchButton';
import fetchUsers from '../fetchUsers';

const initState = {
  fetching: false,
  data: null,
  error: null,
};

class Fetcher2 extends PureComponent {
  state = initState

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({ ...initState, fetching: true });
    try {
      const users = await fetchUsers();
      this.setState({ ...initState, data: users });
    } catch (err) {
      this.setState({ ...initState, error: err.message || 'Unknown error' });
    }
  }

  render() {
    const { error, fetching, data } = this.state;

    return (
      <div className="Fetcher2">
        <h3>Fetching in React Component</h3>
        <FetchButton
          onClick={() => this.fetchData()}
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


export default Fetcher2;
