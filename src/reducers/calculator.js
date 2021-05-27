import { evolve } from 'ramda'
import { createReducer } from '../store/reducer'
import {
  APP_INCREMENT,
  APP_DECREMENT,
} from '../constants/calculator'

const initialState = {
  counter: 0,
}

const increment = (state, { payload }) => {
  console.log('calculator increment, payload: ', payload, ' state: ', state)

  return evolve({ counter: counter => counter + 1 }, state)
}

const decrement = (state, { payload }) => {
  console.log('calculator decrement, payload: ', payload, ' state: ', state)

  return evolve({ counter: counter => counter - 1 }, state)
}

const handlers = {
  [APP_INCREMENT]: increment,
  [APP_DECREMENT]: decrement,
}

const calculatorReducer = createReducer(initialState, handlers)
export default calculatorReducer
