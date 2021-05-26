import calculatorReducer, { CALCULATOR_INITIAL_STATE } from './calculator'
import postsReducer, { POSTS_INITIAL_STATE } from './posts'

export const initReducersState = {
  calculatorReducer: CALCULATOR_INITIAL_STATE,
  postsReducer: POSTS_INITIAL_STATE,
}

export const rootReducers = {
  calculatorReducer,
  postsReducer,
}
