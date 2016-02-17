import '../../../tools/auto_mock_off';

import { fromJS } from 'immutable';
import actionTypes from '../../constants/actionTypes';
import tracksReducer from '../tracks';

const track1 = fromJS({ id: 'track-1', name: 'Track 1' });
const track2 = fromJS({ id: 'track-2', name: 'Track 2' });

describe('tracksReducer', () => {

  it('set the initial state', () => {
    const state = tracksReducer(undefined, undefined);

    expect(state).toEqualImmutable(fromJS([]));
  });

  it('handle ADD_TRACK', () => {
    const action = {
      type: actionTypes.ADD_TRACK,
      track: track1,
    };
    const state = tracksReducer(undefined, action);

    expect(state).toEqualImmutable(fromJS([track1]));
  });

  it('handle REMOVE_TRACK', () => {
    const action = {
      type: actionTypes.REMOVE_TRACK,
      track: track1,
    };
    const state = tracksReducer(fromJS([track1, track2]), action);

    expect(state).toEqualImmutable(fromJS([track2]));
  });

  it('handle SET_TRACKS', () => {
    const action = {
      type: actionTypes.SET_TRACKS,
      tracks: [track1, track2],
    };
    const state = tracksReducer(undefined, action);

    expect(state).toEqualImmutable(fromJS([track1, track2]));
  });

});

