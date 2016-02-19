import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './CreativeListItem.scss'

const CreativeListItem = ({ creative }) => {
  return (
    <div className={s.root}>
      <h4>{creative.get('name')}</h4>
      <div className={s.image}>
        <img src={creative.getIn([ 'content', 'image' ])} width={120} />
      </div>
      <div className={s.content}>
        <div>
          {'Click URL: '}
          <a href={creative.get('url')}>{creative.get('url')}</a>
        </div>
        <h5>{creative.getIn([ 'content', 'title' ])}</h5>
        <div>{creative.getIn([ 'content', 'text' ])}</div>
        <i>{creative.getIn([ 'content', 'link' ])}</i>
      </div>
      <div className={s.sponso}>
        <img src={creative.getIn([ 'sponso', 'image' ])} width={40} />
        <span> {creative.getIn([ 'sponso', 'text' ])} </span>
        <b>{creative.getIn([ 'sponso', 'name' ])} </b>
      </div>
    </div>
  )
}

CreativeListItem.propTypes = {
  creative: ImmutablePropTypes.map.isRequired
}

export default withStyles(CreativeListItem, s)
