import { useMemo } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducers, initReducersState } from '../reducers'

let store

const createReducer = (asyncReducers = {}) => combineReducers({
  ...rootReducers,
  ...asyncReducers,
})

function initStore(preloadedState = initReducersState) {
  return createStore(
    createReducer(),
    preloadedState,
    composeWithDevTools(applyMiddleware()),
  )
}

export const initializeStore = preloadedState => {
  let new_store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    new_store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return new_store

  new_store.asyncReducers = {}
  new_store.injectReducer = (key, asyncReducer) => {
    new_store.asyncReducers[key] = asyncReducer
    new_store.replaceReducer(createReducer(store.asyncReducers))
  }

  // Create the store once in the client
  if (!store) store = new_store

  return new_store
}

export function useStore(state) {
  return useMemo(() => initializeStore(state), [state])
}
