import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { updateIncrement, updateRandomNumber } from '../../src/actions/posts'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

export function testUpdateRandomNumber() {
  return dispatch => updateRandomNumber(dispatch)
}

export function testUpdateIncrement() {
  return dispatch => updateIncrement(dispatch)
}

describe('async posts actions', () => {
  it('checks update random number action parameters', () => {
    const store = mockStore()
    const expectedActions = [
      {
        error: false,
        type: expect.any(String),
        payload: {
          randomNumber: expect.any(Number),
        },
      },
    ]

    return store.dispatch(testUpdateRandomNumber()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

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
})
