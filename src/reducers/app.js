import actionTypes from '../constants/actionTypes';
import { Map, List } from 'immutable';
import { commentsReducer } from './comments';

const INITIAL_STATE = Map({
  tracks: List(),
});

export const appReducer = (state = INITIAL_STATE) => {
  return state;
};
