import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import configureStore from '../../core/configureStore'
import TrackListContainer from '../../containers/TrackListContainer'
import { createFixturesFromData } from './Fixtures'

const store = configureStore()

const BO = (props) => {

  // Dispatch data to the store
  createFixturesFromData(store, props)

  return (
    <Provider store={store}>
      <TrackListContainer />
    </Provider>
  )
}

export default BO
