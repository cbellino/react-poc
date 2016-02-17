import React, { PropTypes } from 'react'
import Immutable from 'immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import List from 'material-ui/lib/lists/list'

import s from './TrackList.scss'
import TrackListItemContainer from '../../containers/TrackListItemContainer'
import TrackListHeader from './TrackListHeader'

const TrackList = ({ tracks = Immutable.List() }) => {

  const trackNodes = tracks.map(track =>
    <TrackListItemContainer key={track.get('id')} track={track} />
  )

  return (
    <div className={s.root}>
      <List subheader="General">
        {tracks.count() > 0 ? trackNodes : <i>{'No track'}</i>}
      </List>
    </div>
  )
}

TrackList.propTypes = {
  tracks: ImmutablePropTypes.list.isRequired
}

export default withStyles(TrackList, s)
