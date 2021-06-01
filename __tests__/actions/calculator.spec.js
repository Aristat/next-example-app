import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { updateIncrement, updateDecrement } from '../../src/actions/calculator'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

export function testUpdateIncrement() {
  return dispatch => updateIncrement(dispatch)
}

export function testUpdateDecrement() {
  return dispatch => updateDecrement(dispatch)
}

describe('async calculator actions', () => {
  it('checks update increment action parameters', () => {
    const store = mockStore()
    const expectedActions = [
      {
        error: false,
        type: expect.any(String),
        payload: undefined,
      },
    ]

    return store.dispatch(testUpdateIncrement()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('checks update decrement action parameters', () => {
    const store = mockStore()
    const expectedActions = [
      {
        error: false,
        type: expect.any(String),
        payload: undefined,
      },
    ]

    return store.dispatch(testUpdateDecrement()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
