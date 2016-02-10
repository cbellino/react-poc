import { fromJS } from 'immutable';
import { appReducer } from '../app';

describe('appReducer', () => {

  it('set the initial state', () => {
    const state = undefined;
    const action = undefined;
    const next = appReducer(state, action);

    expect(next).toEqualImmutable(fromJS({
      comments: [],
      newComment: {},
    }));
  });

});
