import React, { Component, PropTypes } from 'react'
import emptyFunction from 'fbjs/lib/emptyFunction'
import { createStore } from 'redux'
import { List, Map, fromJS } from 'immutable'
import { Provider } from 'react-redux'

import s from './App.scss'
import Header from '../Header'
import configureStore from '../../core/configureStore'

const store = configureStore()

////////////////////////////////////////////////////////////////////////////////
// FIXTURES
////////////////////////////////////////////////////////////////////////////////

// Tracks
store.dispatch({
  type: 'ADD_TRACK',
  track: fromJS({ id: 'track-1', name: 'Awesome track' })
})
store.dispatch({
  type: 'ADD_TRACK',
  track: fromJS({ id: 'track-2', name: 'Fugly track' })
})
store.dispatch({
  type: 'ADD_TRACK',
  track: fromJS({ id: 'track-3', name: 'Yet another track' })
})
store.dispatch({
  type: 'ADD_TRACK',
  track: fromJS({ id: 'track-4', name: 'Yay' })
})
store.dispatch({
  type: 'ADD_TRACK',
  track: fromJS({ id: 'track-5', name: 'Waffles' })
})
store.dispatch({
  type: 'ADD_TRACK',
  track: fromJS({ id: 'track-6', name: 'Serious cat is serious' })
})
store.dispatch({
  type: 'ADD_TRACK',
  track: fromJS({ id: 'track-7', name: 'A track with a loooooooooooooooong name' })
})

// Creatives
store.dispatch({
  type: 'ADD_CREATIVE',
  creative: fromJS({
    id: 'creative-1',
    name: 'I shot the sheriff',
    url: 'https://adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam error cum labore animi, fuga vitae voluptatibus commodi rem, placeat excepturi, quis minus? Illo velit dolore perferendis et minus explicabo quos.',
      image: 'http://cps-static.rovicorp.com/3/JPG_400/MI0003/146/MI0003146038.jpg?partner=allrovi.com',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-1'
  })
})
store.dispatch({
  type: 'ADD_CREATIVE',
  creative: fromJS({
    id: 'creative-2',
    name: 'This is gallifrey',
    url: 'https://google.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe illum aliquid sit, officia neque quae? Iste molestiae provident ipsa, praesentium ea, dolor ab natus laboriosam, culpa, asperiores a distinctio tenetur.',
      image: 'http://www.blastr.com/sites/blastr/files/Gallifrey5.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-2'
  })
})
store.dispatch({
  type: 'ADD_CREATIVE',
  creative: fromJS({
  id: 'creative-3',
  name: 'Let\'s jam!',
  url: 'https://admin.adyoulike.com',
  content: {
    title: 'Adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
    image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
    link: 'More informations',
  },
  sponso: {
    text: 'Sponsored by',
    name: 'Adyoulike',
    image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
  },
  trackId: 'track-2'
  })
})

class App extends Component {

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      onSetTitle: PropTypes.func,
      onSetMeta: PropTypes.func,
      onPageNotFound: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  }

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    onSetTitle: PropTypes.func.isRequired,
    onSetMeta: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired,
  }

  getChildContext() {
    const context = this.props.context
    return {
      insertCss: context.insertCss || emptyFunction,
      onSetTitle: context.onSetTitle || emptyFunction,
      onSetMeta: context.onSetMeta || emptyFunction,
      onPageNotFound: context.onPageNotFound || emptyFunction,
    }
  }

  componentWillMount() {
    this.removeCss = this.props.context.insertCss(s)
  }

  componentWillUnmount() {
    this.removeCss()
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          {this.props.children}
        </div>
      </Provider>
    )
  }

}

export default App
