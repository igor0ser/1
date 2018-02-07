import fetchUsers from '../fetchUsers';

const GET_USERS = 'FETCHER3_GET_USERS';
const GET_USERS_PENDING = `${GET_USERS}_PENDING`;
const GET_USERS_FULFILLED = `${GET_USERS}_FULFILLED`;
const GET_USERS_REJECTED = `${GET_USERS}_REJECTED`;

export const getUsers = () => ({
  type: GET_USERS,
  payload: fetchUsers(),
});

const initState = {
  fetching: false,
  data: null,
  error: null,
};

const fetcher3Reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS_PENDING: return { ...initState, fetching: true };
    case GET_USERS_FULFILLED: return { ...initState, data: action.payload };
    case GET_USERS_REJECTED:
      return { ...initState, error: action.payload.message || 'Unknown error' };
    default: return state;
  }
};

export default fetcher3Reducer;
