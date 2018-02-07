import axios from 'axios';

async function fetchUser() {
  const url = Math.random() < 0.01 ? 'fail' : 'https://randomuser.me/api/';
  const resp = await axios.get(url);
  return resp.data.results[0];
}

async function fetchUsers(n = 10) {
  const promiseArray = new Array(n).fill().map(fetchUser);
  const users = await Promise.all(promiseArray);
  return users;
}

export default fetchUsers;
