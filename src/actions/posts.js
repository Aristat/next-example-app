import { createAct } from '../utils/redux'

const act = createAct('posts')
export const randomNumber = act('setRandomNumber')
export const increment = act('increment')

export const updateRandomNumber = async dispatch => {
  // Test payload, check post reducer 'handleRandomNumber'
  const data = {
    randomNumber: Math.floor(Math.random() * 999),
  }
  dispatch(randomNumber(data))
}

export const updateIncrement = async dispatch => {
  dispatch(increment())
}
