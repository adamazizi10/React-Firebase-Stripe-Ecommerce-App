import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './root-saga'

// import { thunk } from 'redux-thunk'

import { rootReducer } from './root-reducer'

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [!import.meta.env.PROD && logger, sagaMiddleware].filter(Boolean)

const composeEnhancer = (!import.meta.env.PROD && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composedEnhancer = composeEnhancer(applyMiddleware(...middleWares))


export const store = createStore(persistedReducer, undefined, composedEnhancer)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)




