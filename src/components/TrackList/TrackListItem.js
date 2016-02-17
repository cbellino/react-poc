import React, { Component, PropTypes } from 'react'
import { List } from 'immutable'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './TrackListItem.scss'

const TrackListItem = ({ track, creatives = List() }) => {

  const creativeNodes = creatives.map(creative =>
    <div key={creative.get('id')} creative={creative}>{creative}</div>
  )

  return (
    <div>
      <div>{track.get('name')}</div>
      {creatives.count() > 0 ? creativeNodes: <i>{'No creative'}</i> }
      <hr/>
    </div>
  )
}

TrackListItem.propTypes = {
  track: PropTypes.object.isRequired
}

export default withStyles(TrackListItem, s)
