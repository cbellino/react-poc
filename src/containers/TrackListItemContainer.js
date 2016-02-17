import { connect } from 'react-redux'
import { List } from 'immutable'

import TrackListItem from '../components/TrackList/TrackListItem'

function mapStateToProps(state, { track }) {
  const creatives = state.get('creatives') ?
                    state.get('creatives').filter(creative => creative.get('trackId') === track.get('id')) :
                    List()

  return {
    creatives: creatives
  }
}

export default connect(mapStateToProps)(TrackListItem)
