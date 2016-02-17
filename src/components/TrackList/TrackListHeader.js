import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TrackListHeader.scss';

const TrackListHeader = ({ count }) => (
  <div>
    <b>{'Tracks'} </b>
    <i>({count})</i>
  </div>
)

export default withStyles(TrackListHeader, s);
