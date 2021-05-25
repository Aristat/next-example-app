import { useMemo } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { rootReducers, initReducersState } from './../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

let store

const createReducer = (asyncReducers = {}) => combineReducers({
  ...rootReducers,
  ...asyncReducers,
})

function initStore(preloadedState = initReducersState) {
  return createStore(
    createReducer(),
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store

  _store.asyncReducers = {}
  _store.injectReducer = (key, asyncReducer) => {
    _store.asyncReducers[key] = asyncReducer
    _store.replaceReducer(createReducer(store.asyncReducers))
  }

  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(state) {
  return useMemo(() => initializeStore(state), [state])
}
