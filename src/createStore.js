import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers';
import ReduxThunk from 'redux-thunk';

export const middlewares = [ReduxThunk];

export const createStoreWMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWMiddleware(Reducers);