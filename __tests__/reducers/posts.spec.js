import postsReducer from '../../src/reducers/posts'
import {
  randomNumber,
  increment,
} from '../../src/actions/posts'

const reducer = postsReducer
const randomDefaultNumber = Math.floor(Math.random() * 999)

describe('posts reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        posts: [],
        randomNumber: 0,
      },
    )
  })

  it('should handle randomNumber', () => {
    expect(
      reducer(undefined, {
        type: randomNumber,
      }),
    ).toEqual(
      {
        posts: [],
        randomNumber: expect.any(Number),
      },
    )
  })

  it('should handle increment', () => {
    expect(
      reducer(undefined, {
        type: increment,
      }),
    ).toEqual(
      {
        posts: [],
        randomNumber: expect.any(Number),
      },
    )
  })
})
