import React, { PropTypes } from 'react'
import { List } from 'immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './TrackList.scss'
import TrackListItemContainer from '../../containers/TrackListItemContainer'

const TrackList = ({ tracks = List() }) => {

  const trackNodes = tracks.map(track =>
    <TrackListItemContainer key={track.get('id')} track={track} />
  )

  return (
    <div className={s.root}>
      {tracks.count() > 0 ? trackNodes : <i>{'No track'}</i>}
    </div>
  )
}

TrackList.propTypes = {
  tracks: ImmutablePropTypes.list.isRequired
}

export default withStyles(TrackList, s)
