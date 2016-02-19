import { fromJS } from 'immutable'
import actionTypes from '../../constants/actionTypes'
import creativesReducer from '../creatives'

const creative1 = fromJS({ id: 'creative-1', name: 'Creative 1' })
const creative2 = fromJS({ id: 'creative-2', name: 'Creative 2' })

describe('creativesReducer', () => {

  it('set the initial state', () => {
    const state = creativesReducer(undefined, undefined)

    expect(state).toEqualImmutable(fromJS([ ]))
  })

  it('handle ADD_CREATIVE', () => {
    const action = {
      type: actionTypes.ADD_CREATIVE,
      creative: creative1
    }
    const state = creativesReducer(undefined, action)

    expect(state).toEqualImmutable(fromJS([ creative1 ]))
  })

  it('handle REMOVE_CREATIVE', () => {
    const action = {
      type: actionTypes.REMOVE_CREATIVE,
      creative: creative1
    }
    const state = creativesReducer(fromJS([ creative1, creative2 ]), action)

    expect(state).toEqualImmutable(fromJS([ creative2 ]))
  })

  it('handle SET_CREATIVES', () => {
    const action = {
      type: actionTypes.SET_CREATIVES,
      creatives: [ creative1, creative2 ]
    }
    const state = creativesReducer(undefined, action)

    expect(state).toEqualImmutable(fromJS([ creative1, creative2 ]))
  })

})

