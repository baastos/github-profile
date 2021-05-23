import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/rootReducer';
import { User } from './modules/user/types';

//SAGA
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export type StoreProps = {
  user: User
  token: string;
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga)
export default store;