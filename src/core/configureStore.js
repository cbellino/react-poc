import { Map, List } from 'immutable';
import { createStore, compose, combineReducers } from 'redux';
import { persistState, instrument } from 'redux-devtools';
import { commentsReducer } from '../reducers/comments';
import { appReducer } from '../reducers/app';

export default function configureStore (initialState) {
  const finalCreateStore = compose(
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
  )(createStore);

  const reducer = combineReducers({
    appReducer: appReducer,
    commentsReducer: commentsReducer,
  });
  const store = finalCreateStore(reducer, initialState);

  return store;
}
