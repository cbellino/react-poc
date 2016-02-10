import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './TrackList.scss';
import TrackListItem from './TrackListItem';
import TrackListHeader from './TrackListHeader';

const TrackList = ({ tracks }) => {

  const trackListItems = tracks.map(function(track) {
    return (
      <TrackListItem track={track} />
    );
  });

  return (
    <div className="trackList">
      <TrackListHeader />
      {trackListItems}
    </div>
  )
}

export default withStyles(TrackList, s);
