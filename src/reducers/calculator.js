import {
  evolve, compose
} from 'ramda'
import { createReducer } from '../store/reducer'
import {
  APP_INCREMENT,
  APP_DECREMENT,
} from '../constants/calculator'

export const CALCULATOR_INITIAL_STATE = {
  counter: 0,
}

const increment = (state, { payload }) => {
  console.log('calculator increment, payload: ', payload, ' state: ', state)

  return compose(
    evolve({
      counter: counter => {
        return counter + 1
      }
    }),
  )(state)
}

const decrement = (state, { payload }) => {
  console.log('calculator decrement, payload: ', payload, ' state: ', state)

  return compose(
    evolve({
      counter: counter => {
        return counter - 1
      }
    }),
  )(state)
}

const handlers = {
  [APP_INCREMENT]: increment,
  [APP_DECREMENT]: decrement
}

export default createReducer(CALCULATOR_INITIAL_STATE, handlers)
