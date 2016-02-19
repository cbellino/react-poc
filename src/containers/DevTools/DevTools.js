import React from 'react'
import { Map } from 'immutable'

import { createDevTools } from 'redux-devtools'
import MonitorsToolbar from './MonitorsToolbar'
import LogMonitor from 'redux-devtools-log-monitor'
import SliderMonitor from 'redux-slider-monitor'
import Dispatcher from 'redux-devtools-dispatch'
import Colors from 'material-ui/lib/styles/colors'
import SliderIcon from 'material-ui/lib/svg-icons/action/trending-flat'
import LogIcon from 'material-ui/lib/svg-icons/navigation/menu'
import DispatcherIcon from 'material-ui/lib/svg-icons/communication/present-to-all'

const actionCreators = {
  addTrack(track) {
    return { type: 'ADD_TRACK', track: Map(track) }
  }
}

const DevTools = createDevTools(
  <MonitorsToolbar>
    <SliderMonitor keyboardEnabled icon={<SliderIcon color={Colors.blue50} />} />
    <LogMonitor theme="solarized" icon={<LogIcon color={Colors.blue50} />} />
    <Dispatcher actionCreators={actionCreators} icon={<DispatcherIcon color={Colors.blue50} />} />
  </MonitorsToolbar>
)

export default DevTools
