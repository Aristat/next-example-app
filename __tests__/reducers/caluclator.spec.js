import calculatorReducer from '../../src/reducers/calculator'
import {
  increment,
  decrement,
} from '../../src/actions/calculator'

const reducer = calculatorReducer
const randomDefaultNumber = Math.floor(Math.random() * 999)

describe('calculator reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        counter: 0,
      },
    )
  })

  it('should handle increment', () => {
    expect(
      reducer({ counter: randomDefaultNumber }, {
        type: increment,
      }),
    ).toEqual(
      {
        counter: randomDefaultNumber + 1,
      },
    )
  })

  it('should handle decrement', () => {
    expect(
      reducer({ counter: randomDefaultNumber }, {
        type: decrement,
      }),
    ).toEqual(
      {
        counter: randomDefaultNumber - 1,
      },
    )
  })
})
