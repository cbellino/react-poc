import { Map, List, fromJS } from 'immutable';
import actionTypes from '../constants/actionTypes';

const INITIAL_STATE = fromJS([
  { id: '1', name: 'Awesome track' },
  { id: '2', name: 'Fugly track' },
  { id: '3', name: 'Yet another track' }
])

const tracksReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case actionTypes.ADD_TRACK:
      return addTrack(state, action.track);
    case actionTypes.REMOVE_TRACK:
      return removeTrack(state, action.track);
    case actionTypes.SET_TRACKS:
      return setTracks(state, action.tracks);
  }

  return state;
};

export const addTrack = (state = List(), track) => {
  return state.push(track);
};

export const removeTrack = (state = List(), target) => {
  return state.filter(track => track.get('id') !== target.get('id'));
};

export const setTracks = (state = List(), tracks) => {
  return state.clear().merge(tracks);
};

export default tracksReducer;
