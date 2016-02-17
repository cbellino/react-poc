import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux';
import { List, Map, fromJS } from 'immutable';
import { Provider } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './IndexPage.scss';
import configureStore from '../../core/configureStore';
import TracksContainer from '../../containers/TracksContainer';

const title = 'Tracks';
const INITIAL_STATE = fromJS({
  tracks: [
    { id: 'track-1', name: 'Awesome track' },
    { id: 'track-2', name: 'Fugly track' },
    { id: 'track-3', name: 'Yet another track' },
    { id: 'track-4', name: 'Yay' },
    { id: 'track-5', name: 'Waffles' },
    { id: 'track-6', name: 'Serious cat is serious' },
    { id: 'track-7', name: 'A track with a loooooooooooooooong name' },
    { id: 'track-8', name: 'Wow, such track' },
  ]
})
const store = configureStore(INITIAL_STATE);

class IndexPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{IndexPage}</h1>
          <Provider store={store}>
            <TracksContainer />
          </Provider>
        </div>
      </div>
    );
  }

}

export default withStyles(IndexPage, s);
