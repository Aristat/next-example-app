import { evolve } from 'ramda'
import { createReducer } from '../utils/redux'
import {
  randomNumber,
  increment,
} from '../actions/posts'

const initialState = {
  posts: [],
  randomNumber: 0,
}

const handleRandomNumber = (state, { payload }) => {
  console.log('posts random number, payload: ', payload, ' state: ', state)

  return evolve({
    randomNumber: () => Math.floor(Math.random() * 999),
  }, state)
}

const handleIncrement = (state, { payload }) => {
  console.log('posts increment, payload: ', payload, ' state: ', state)

  return evolve({ randomNumber: r => r + 2 }, state)
}

const handlers = {
  [randomNumber]: handleRandomNumber,
  [increment]: handleIncrement,
}

const postsReducer = createReducer(initialState, handlers)
export default postsReducer
