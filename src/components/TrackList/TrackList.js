import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './TrackList.scss';
import TrackListItem from './TrackListItem';
import TrackListHeader from './TrackListHeader';

const TrackList = ({ tracks }) => {

  const trackListItemNodes = () => tracks.map(track =>
    <TrackListItem key={track.id} track={track} />
  )

  return (
    <div className="trackList">
      <TrackListHeader />
      {tracks ? trackListItemNodes() : 'No track'}
    </div>
  )
}

export default withStyles(TrackList, s);
