import { createStore, combineReducers } from 'redux'
import rootReducer from './../reducers'

const createReducer = (asyncReducers = {}) => combineReducers({
  ...rootReducer,
  ...asyncReducers,
})

const configureStore = locale => {
  const store = createStore(
      createReducer(),
  )

  store.asyncReducers = {}

  store.injectReducer = (key, asyncReducer) => {
      store.asyncReducers[key] = asyncReducer
      store.replaceReducer(createReducer(store.asyncReducers))
  }

  return store
}

export default configureStore
