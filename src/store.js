import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';


import counterReducer from './Counter/Counter.duck';
import fetcher3Reducer from './Fetcher/Fetcher3/Fetcher3.duck';
import fetcher4Reducer from './Fetcher/Fetcher4/Fetcher4.duck';
import fetcher5Reducer, { fetcher5Saga } from './Fetcher/Fetcher5/Fetcher5.duck';


const reducer = combineReducers({
  counter: counterReducer,
  fetcher3: fetcher3Reducer,
  fetcher4: fetcher4Reducer,
  fetcher5: fetcher5Reducer,
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(
  promise(),
  thunk,
  sagaMiddleware,
  logger,
);

const store = createStore(reducer, middlewares);

sagaMiddleware.run(fetcher5Saga);

export default store;
