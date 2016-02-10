/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux';
import { List, Map } from 'immutable';
import { Provider } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './IndexPage.scss';
import configureStore from '../../core/configureStore';
import TracksContainer from '../../containers/TracksContainer';

const title = 'Tracks';
const store = configureStore();

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
