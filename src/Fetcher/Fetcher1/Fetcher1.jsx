import React, { PureComponent } from 'react';
import Loader from '../Loader/Loader';
import User from '../User/User';
import ErrorComp from '../Error/Error';
import fetchUsers from '../fetchUsers';

class Fetcher1 extends PureComponent {
  state = { fetchState: 'loading' }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({ fetchState: 'loading' });
    try {
      const users = await fetchUsers();
      this.setState({ fetchState: users });
    } catch (err) {
      this.setState({
        fetchState: { errMessage: err.message || 'Unknown error' },
      });
    }
  }

  renderFetchResult() {
    const { fetchState } = this.state;
    if (fetchState === 'loading') return <Loader />;
    if (fetchState.errMessage) return <ErrorComp message={fetchState.errMessage} />;

    return fetchState.map(user => <User {...user} key={user.email} />);
  }

  render() {
    return (
      <div className="Fetcher1">
        <h3>Fetching in React Component</h3>
        <button onClick={() => this.fetchData()}>
          refetch&nbsp;
          <i className="fa fa-refresh" />
        </button>
        <br />
        {this.renderFetchResult()}
      </div>
    );
  }
}


export default Fetcher1;
