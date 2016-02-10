import { Map, List } from 'immutable';
import actionTypes from '../constants/actionTypes';

export const commentsReducer = (state = List(), action = Map()) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      return addComment(state, action.comment);
    case actionTypes.REMOVE_COMMENT:
      return removeComment(state, action.comment);
    case actionTypes.SET_COMMENTS:
      return setComments(state, action.comments);
  }

  return state;
};

export const addComment = (state = List(), comment) => {
  return state.push(comment);
};

export const removeComment = (state = List(), comment) => {
  return state.pop(comment);
};

export const setComments = (state = List(), comments) => {
  return state.clear().merge(comments);
};
