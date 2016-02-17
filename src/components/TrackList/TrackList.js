import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './TrackList.scss'
import TrackListItem from './TrackListItem'
import TrackListHeader from './TrackListHeader'

const TrackList = ({ tracks = List() }) => {

  const trackListItemNodes = tracks.map(track =>
    <TrackListItem key={track.get('id')} track={track} />
  )

  return (
    <div className={s.root}>
      <TrackListHeader count={tracks.count()} />
      <hr/>
      {tracks.count() > 0 ? trackListItemNodes : <i>{'No track'}</i>}
    </div>
  )
}

export default withStyles(TrackList, s)
