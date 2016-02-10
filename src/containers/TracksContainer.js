import { connect } from 'react-redux';
import TrackList from '../components/TrackList/TrackList';

function mapStateToProps (state) {
  return {
    tracks: state.get('tracks'),
  };
}

export default connect(mapStateToProps)(TrackList);
