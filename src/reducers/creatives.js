import { List } from 'immutable'
import actionTypes from '../constants/actionTypes'

const INITIAL_STATE = List()

const creativesReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case actionTypes.ADD_CREATIVE:
      return addCreative(state, action.creative)
    case actionTypes.REMOVE_CREATIVE:
      return removeCreative(state, action.creative)
    case actionTypes.SET_CREATIVES:
      return setCreatives(state, action.creatives)
  }

  return state
}

export const addCreative = (state = List(), creative) => {
  return state.push(creative)
}

export const removeCreative = (state = List(), target) => {
  return state.filter(creative => creative.get('id') !== target.get('id'))
}

export const setCreatives = (state = List(), creatives) => {
  return state.clear().merge(creatives)
}

export default creativesReducer
