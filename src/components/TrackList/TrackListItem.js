import React, { Component, PropTypes } from 'react'
import { List } from 'immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import ListItem from 'material-ui/lib/lists/list-item'
import ArrowRight from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-right'
import Divider from 'material-ui/lib/divider'

import s from './TrackListItem.scss'

const TrackListItem = ({ track, creatives = List() }) => {

  const creativeNodes = creatives.map(creative =>
    <div key={creative.get('id')} creative={creative}>{creative}</div>
  )

  return (
    <div>
      <ListItem
        leftIcon={<ArrowRight />}
      >
        <div>{track.get('name')}</div>
        {creatives.count() > 0 ? creativeNodes: <i>{'No creative'}</i> }
      </ListItem>
      <Divider />
    </div>
  )
}

TrackListItem.propTypes = {
  track: ImmutablePropTypes.map.isRequired,
  creatives: ImmutablePropTypes.list.isRequired
}

export default withStyles(TrackListItem, s)
