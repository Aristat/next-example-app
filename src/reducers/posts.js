import {APP_SET_RANDOM_NUMBER} from "../constants/posts";
import {createReducer} from "../store/reducer";
import {compose, evolve} from "ramda";

export const POSTS_INITIAL_STATE = {
  posts: [],
  randomNumber: 0
}

const generateRandomNumber = (state, { payload }) => {
  console.log('posts generateRandomNumber, payload: ', payload, ' state: ', state)

  return compose(
    evolve({
      randomNumber: () => {
        return Math.floor(Math.random() * 999)
      }
    }),
  )(state)
}

const handlers = {
  [APP_SET_RANDOM_NUMBER]: generateRandomNumber,
}

export default createReducer(POSTS_INITIAL_STATE, handlers)
