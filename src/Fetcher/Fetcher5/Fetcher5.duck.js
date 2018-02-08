import { call, put, takeEvery } from 'redux-saga/effects';
import fetchUsers from '../fetchUsers';

const GET_USERS_REQUESTED = 'FETCHER5_GET_USERS_REQUESTED';
const GET_USERS_SUCCEEDED = 'FETCHER5_GET_USERS_SUCCEEDED';
const GET_USERS_FAILED = 'FETCHER5_GET_USERS_FAILED';

export const dispatchGetUsers = () => ({ type: GET_USERS_REQUESTED });

export function* getUsers() {
  try {
    const users = yield call(fetchUsers);
    yield put({ type: 'FETCHER5_GET_USERS_SUCCEEDED', payload: users });
  } catch (e) {
    yield put({ type: 'FETCHER5_GET_USERS_FAILED', payload: e.message || 'Unknown error' });
  }
}

export function* fetcher5Saga() {
  yield takeEvery('FETCHER5_GET_USERS_REQUESTED', getUsers);
}

const initState = {
  fetching: false,
  data: null,
  error: null,
};

const fetcher5Reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS_REQUESTED: return { ...initState, fetching: true };
    case GET_USERS_SUCCEEDED: return { ...initState, data: action.payload };
    case GET_USERS_FAILED:
      return { ...initState, error: action.payload };
    default: return state;
  }
};

export default fetcher5Reducer;
