import { evolve } from 'ramda'
import { APP_SET_RANDOM_NUMBER } from '../constants/posts'
import { createReducer } from '../store/reducer'

export const POSTS_INITIAL_STATE = {
  posts: [],
  randomNumber: 0,
}

const generateRandomNumber = (state, { payload }) => {
  console.log('posts generateRandomNumber, payload: ', payload, ' state: ', state)

  return evolve({
    randomNumber: () => Math.floor(Math.random() * 999),
  }, state)
}

const handlers = {
  [APP_SET_RANDOM_NUMBER]: generateRandomNumber,
}

const postsReducer = createReducer(POSTS_INITIAL_STATE, handlers)
export default postsReducer
