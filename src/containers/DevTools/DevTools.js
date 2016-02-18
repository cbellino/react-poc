import React from 'react'
import { Map } from 'immutable'

import { createDevTools } from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import MultipleMonitors from './MultipleMonitors'
import LogMonitor from 'redux-devtools-log-monitor'
import SliderMonitor from 'redux-slider-monitor'
import Dispatcher from 'redux-devtools-dispatch'

const styles = [
  {
    height: '85%'
  },
  {
    position: 'fixed',
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2
  },
  {
    position: 'relative'
  }
]

const actionCreators = {
  addTrack(track) {
    return { type: 'ADD_TRACK', track: Map(track) }
  }
}

const DevTools = createDevTools(
  <DockMonitor
    defaultIsVisible={false}
    toggleVisibilityKey="ctrl-d"
    changePositionKey="ctrl-e"
    defaultPosition="right"
  >
    <MultipleMonitors styles={styles}>
      <LogMonitor theme="solarized" />
      <SliderMonitor keyboardEnabled />
      <Dispatcher actionCreators={actionCreators} />
    </MultipleMonitors>
  </DockMonitor>
)

export default DevTools
