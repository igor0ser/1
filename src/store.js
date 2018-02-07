import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import counterReducer from './Counter/Counter.duck';
import fetcher3Reducer from './Fetcher/Fetcher3/Fetcher3.duck';


const reducer = combineReducers({
  counter: counterReducer,
  fetcher3: fetcher3Reducer,
});

const middlewares = applyMiddleware(promise(), logger);

const store = createStore(reducer, middlewares);

export default store;
