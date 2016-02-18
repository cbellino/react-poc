import { Map } from 'immutable'
import { createStore, compose } from 'redux'
import { combineReducers } from 'redux-immutable'
import * as reducers from '../reducers'
import DevTools from '../containers/DevTools/DevTools'

const enhancer = compose(
  DevTools.instrument()
)

export default function configureStore(initialState = Map()) {
  const reducer = combineReducers(reducers)
  const store = createStore(reducer, initialState, enhancer)

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = combineReducers(require('../reducers'))
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
