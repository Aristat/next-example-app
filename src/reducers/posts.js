import { evolve } from 'ramda'
import { createReducer } from '../utils/redux'
import {
  randomNumber,
} from '../actions/posts'

const initialState = {
  posts: [],
  randomNumber: 0,
}

const handleRandomNumber = (state, { payload }) => {
  console.log('posts generateRandomNumber, payload: ', payload, ' state: ', state)

  return evolve({
    randomNumber: () => Math.floor(Math.random() * 999),
  }, state)
}

const handlers = {
  [randomNumber]: handleRandomNumber,
}

const postsReducer = createReducer(initialState, handlers)
export default postsReducer
