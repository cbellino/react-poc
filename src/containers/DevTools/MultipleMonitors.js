// Forked from https://github.com/YoruNoHikage/redux-devtools-multiple-monitors/blob/master/src/MultipleMonitors.js

import React, { Component, cloneElement } from 'react'

function childrenMonitorState(props, state, action) {
  return props.children.map(child => child.type.update(child.props, state, action))
}

function reducer(props, state = {}, action) {
  return {
    childrenMonitorState: childrenMonitorState(props, state.childMonitorState, action)
  }
}

const defaultStyle = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
}
const defaultStyles = []

export default class MultipleMonitors extends Component {
  static update = reducer;

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { monitorState, children, style = defaultStyle, styles = defaultStyles, ...rest } = this.props

    const monitors = children.map((e, i) => {
      const monitorNode = cloneElement(e, {
        ...rest,
        monitorState: monitorState.childrenMonitorState[i]
      })

      return (
        <div key={`monitor${i}`} style={styles[i]}>
          {monitorNode}
        </div>
      )
    })

    return (
      <div style={style}>
        {monitors}
      </div>
    )
  }
}
