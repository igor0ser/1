import fetchUsers from '../fetchUsers';

const GET_USERS = 'FETCHER4_GET_USERS';
const GET_USERS_REQUEST = `${GET_USERS}_REQUEST`;
const GET_USERS_SUCCESS = `${GET_USERS}_SUCCESS`;
const GET_USERS_ERROR = `${GET_USERS}_ERROR`;

export const getUsers = () => (dispatch) => {
  dispatch({ type: GET_USERS_REQUEST });
  fetchUsers()
    .then(users => dispatch({
      type: GET_USERS_SUCCESS,
      payload: users,
    }))
    .catch(error => dispatch({
      type: GET_USERS_ERROR,
      payload: error.message || 'Unknown error',
    }));
};

const initState = {
  fetching: false,
  data: null,
  error: null,
};

const fetcher4Reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST: return { ...initState, fetching: true };
    case GET_USERS_SUCCESS: return { ...initState, data: action.payload };
    case GET_USERS_ERROR:
      return { ...initState, error: action.payload };
    default: return state;
  }
};

export default fetcher4Reducer;
