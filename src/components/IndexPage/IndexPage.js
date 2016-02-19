import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './IndexPage.scss'
import TracksContainer from '../../containers/TracksContainer'

const title = 'Tracks'

class IndexPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.context.onSetTitle(title)
  }

  render() {
    return (
      <div className={s.container}>
        <h1>{IndexPage}</h1>
        <div className={s.root}>
          <TracksContainer />
        </div>
      </div>
    )
  }

}

export default withStyles(IndexPage, s)
