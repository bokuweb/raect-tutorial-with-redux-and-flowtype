/* @flow */
import type { Store } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import comment from '../reducers/comment';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';


export default function configureStore(): Store {
  const logger = createLogger();
  const createStoreWithMiddleware = applyMiddleware(
    thunk, logger
  )(createStore);
  const store: Store = createStoreWithMiddleware(comment);
  return store;
}

