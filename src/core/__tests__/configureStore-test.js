import '../../../tools/auto_mock_off'

import configureStore from '../configureStore'
import * as reducers from '../../reducers'

describe('configureStore', () => {

  it('exists', () => {
    const store = configureStore()

    expect(store).toBeDefined()
  })

  it('contains tracksReducer', () => {
    expect(reducers.tracks).toBeDefined()
  })

  it('contains creativesReducer', () => {
    expect(reducers.creatives).toBeDefined()
  })

})
