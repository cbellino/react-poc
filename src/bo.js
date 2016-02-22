/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel-polyfill'
import ReactDOM from 'react-dom'
import React from 'react'
import FastClick from 'fastclick'
import Router from './routes'
import Location from './core/Location'
import { addEventListener, removeEventListener } from './core/DOMUtils'
import injectTapEventPlugin from 'react-tap-event-plugin'

import BO from './components/BO/BO'

function render(props) {
  console.log('Render react component', props)
  const appContainer = document.getElementById('react-app')
  const component = React.createElement(BO, props)

  if(!appContainer) {
    console.warn(`Container not found: #${id}`)
    return
  }

  ReactDOM.render(component, appContainer)
}

function run(props) {
  FastClick.attach(document.body)
  injectTapEventPlugin()
  render(props)
}

window.reactRun = run
