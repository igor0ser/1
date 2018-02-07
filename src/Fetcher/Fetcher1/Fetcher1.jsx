import React, { PureComponent } from 'react';
import Loader from '../Loader/Loader';
import User from '../User/User';
import Err from '../Error/Error';
import FetchButton from '../FetchButton/FetchButton';
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
    if (fetchState.errMessage) return <Err message={fetchState.errMessage} />;

    return fetchState.map(user => <User {...user} key={user.email} />);
  }

  render() {
    return (
      <div className="Fetcher1">
        <h3>Fetching in React Component. All steps are saved in fetchState</h3>
        <FetchButton
          onClick={() => this.fetchData()}
          fetching={this.state.fetchState === 'loading'}
        />
        <br />
        {this.renderFetchResult()}
      </div>
    );
  }
}


export default Fetcher1;
