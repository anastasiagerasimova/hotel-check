import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers'
import apiRootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(apiRootSaga)

export default store