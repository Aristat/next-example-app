import { createAct } from '../utils/redux'

const act = createAct('calculator')
export const increment = act('increment')
export const decrement = act('decrement')

export const updateIncrement = async dispatch => {
  dispatch(increment())
}

export const updateDecrement = async dispatch => {
  dispatch(decrement())
}
