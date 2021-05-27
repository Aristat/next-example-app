import { evolve } from 'ramda'
import { createReducer } from '../utils/redux'
import {
  increment,
  decrement,
} from '../actions/calculator'

const initialState = {
  counter: 0,
}

const handleIncrement = (state, { payload }) => {
  console.log('calculator increment, payload: ', payload, ' state: ', state)

  return evolve({ counter: counter => counter + 1 }, state)
}

const handleDecrement = (state, { payload }) => {
  console.log('calculator decrement, payload: ', payload, ' state: ', state)

  return evolve({ counter: counter => counter - 1 }, state)
}

const handlers = {
  [increment]: handleIncrement,
  [decrement]: handleDecrement,
}

const calculatorReducer = createReducer(initialState, handlers)
export default calculatorReducer
