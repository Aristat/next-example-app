import {
  evolve, compose
} from 'ramda'
import { createReducer } from '../utils/reducer'
import {
  APP_INCREMENT,
  APP_DECREMENT,
} from '../constants/simple_operations'

export const initialState = {
  useLocalStorage: false,
  appProps: { counter: 0 },
}

const incrementAppProps = (state, { payload }) => {
  console.log('incrementAppProps', payload)

  return compose(
    evolve({
      appProps: {
        counter: counter => {
          return counter + 1
        }
      }
    }),
  )(state)
}

const decrementAppProps = (state, { payload }) => {
  console.log('decrementAppProps', payload)

  return compose(
    evolve({
      appProps: {
        counter: counter => {
          return counter - 1
        }
      }
    }),
  )(state)
}

const handlers = {
  [APP_INCREMENT]: incrementAppProps,
  [APP_DECREMENT]: decrementAppProps
}

export default createReducer(initialState, handlers)
