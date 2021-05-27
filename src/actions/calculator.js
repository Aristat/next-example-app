import { createAct } from '../utils/redux'

const act = createAct('calculator')
export const increment = act('increment')
export const decrement = act('decrement')

export const updateIncrement = dispatch => {
  dispatch(increment())
}

export const updateDecrement = dispatch => {
  dispatch(decrement())
}
