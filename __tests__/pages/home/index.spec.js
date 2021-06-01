import { render, screen } from '../../utils/render'
import Home from '../../../src/pages/home'

const backendProps = {
  calculatorReducer: {
    counter: 5,
  },
}

describe('Home', () => {
  it('Renders the Home with initialState', () => {
    render(<Home />, { initialState: backendProps })

    expect(screen.getByText(/Counter 5/i)).toBeInTheDocument()
  })
})
