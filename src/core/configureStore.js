import { Map } from 'immutable'
import { createStore, compose } from 'redux'
import { combineReducers } from 'redux-immutable'
import * as reducers from '../reducers'

const INITIAL_STATE = Map()

export default function configureStore(initialState = INITIAL_STATE) {
  const finalCreateStore = compose(
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
  )(createStore)

  const reducer = combineReducers(reducers)
  const store = finalCreateStore(reducer, initialState)

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = combineReducers(require('../reducers'))
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
