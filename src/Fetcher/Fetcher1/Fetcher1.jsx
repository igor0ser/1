import React, { PureComponent } from 'react';
import Loader from '../Loader/Loader';
import User from '../User/User';
import fetchUsers from '../fetchUsers';

class Fetcher1 extends PureComponent {
  state = { users: null }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({ users: null });
    try {
      const users = await fetchUsers();
      this.setState({ users });
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    const { users } = this.state;

    return (
      <div className="Fetcher1">
        <h3>Fetching in React Component</h3>
        <button onClick={() => this.fetchData()}> Refetch</button>
        <br />
        {users ? users.map(u => (
          <User {...u} key={u.email} />
        )) : <Loader />}
      </div>
    );
  }
}


export default Fetcher1;
