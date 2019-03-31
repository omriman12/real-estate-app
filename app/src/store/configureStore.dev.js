import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware, { END } from 'redux-saga'
import reduxImuttableStateInvariant from 'redux-immutable-state-invariant'; 
import rootReducer from '../rootReducer';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware , reduxImuttableStateInvariant() ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )      
  )

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}