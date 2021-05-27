import { curry } from 'ramda'
import { createAction } from 'redux-act'

export const createReducer = (initialState, handlers = {}) => (
  (state = initialState, action) => (
    handlers[action.type] ? handlers[action.type](state, action) : state
  )
)

export const createAct = curry((actionPrefix, actionName) => (
  createAction(`${actionPrefix}/${actionName}`)
))
