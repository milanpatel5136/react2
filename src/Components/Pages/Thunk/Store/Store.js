import {createStore, applyMiddleware} from 'redux';
import creactSagaMiddlewere from 'redux-saga'
import rootSaga from '../../../../Saga/rootSaga';
import RootReducer  from '../RootReducer';

const sagaMiddlewere = creactSagaMiddlewere();

const middleWare = [sagaMiddlewere];

const store = createStore(RootReducer,applyMiddleware(...middleWare));
sagaMiddlewere.run(rootSaga)

export default store;