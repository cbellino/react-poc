import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TrackListItem.scss';

const TrackListItem = ({ track }) => (
  <div>{track.get('name')} <i>#{track.get('id')}</i></div>
)

TrackListItem.propTypes = {
  track: PropTypes.object.isRequired
}

export default withStyles(TrackListItem, s);
