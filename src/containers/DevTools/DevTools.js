import React from 'react'
import { fromJS } from 'immutable'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import MonitorsToolbar from './MonitorsToolbar'
import SliderMonitor from 'redux-slider-monitor'
import Dispatcher from 'redux-devtools-dispatch'
import DiffMonitor from 'redux-devtools-diff-monitor'
import ChartMonitor from 'redux-devtools-chart-monitor-immutable'

import Colors from 'material-ui/lib/styles/colors'
import SliderIcon from 'material-ui/lib/svg-icons/editor/linear-scale'
import LogIcon from 'material-ui/lib/svg-icons/navigation/menu'
import DispatcherIcon from 'material-ui/lib/svg-icons/communication/present-to-all'
import DiffIcon from 'material-ui/lib/svg-icons/communication/call-split'
import ChartIcon from 'material-ui/lib/svg-icons/hardware/device-hub'

const actionCreators = {
  addTrack(id) {
    const track = fromJS({
      id: `track-${id}`,
      name: `Super track ${id}`
    })
    return { type: 'ADD_TRACK', track: track }
  },
  addCreative(trackId) {
    const randomId = Math.floor(Math.random() * 100000) + 1
    const creative = fromJS({
      id: `creative-${randomId}`,
      name: `Awesome creative ${randomId}`,
      trackId: `track-${trackId}` || null,
      url: 'https://adyoulike.com',
      content: {
        title: 'Adipisicing elit',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam error cum labore animi, fuga vitae voluptatibus commodi rem, placeat excepturi, quis minus? Illo velit dolore perferendis et minus explicabo quos.',
        image: 'http://cps-static.rovicorp.com/3/JPG_400/MI0003/146/MI0003146038.jpg?partner=allrovi.com',
        link: 'More informations'
      },
      sponso: {
        text: 'Sponsored by',
        name: 'Adyoulike',
        image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
      }
    })
    return { type: 'ADD_CREATIVE', creative: creative }
  }
}

const DevTools = createDevTools(
  <MonitorsToolbar>
    <SliderMonitor keyboardEnabled icon={<SliderIcon color={Colors.blue50} />} />
    <LogMonitor theme="solarized" icon={<LogIcon color={Colors.blue50} />} />
    <Dispatcher actionCreators={actionCreators} icon={<DispatcherIcon color={Colors.blue50} />} />
    <DiffMonitor icon={<DiffIcon color={Colors.blue50} />} />
    <ChartMonitor hasImmutables={true} icon={<ChartIcon color={Colors.blue50} />} />
  </MonitorsToolbar>
)

export default DevTools
