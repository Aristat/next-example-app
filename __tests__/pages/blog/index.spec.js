import { render, screen } from '../../utils/render'
import Blog from '../../../src/pages/blog'

const backendProps = {
  postsReducer: {
    posts: [
      { name: 'test react' },
    ],
    randomNumber: 15,
  },
}

describe('Blog', () => {
  it('Renders the Blog with initialState', () => {
    render(<Blog />, { initialState: backendProps })

    expect(screen.getByText(/Random number 15/i)).toBeInTheDocument()
    expect(screen.getByText(/test react/i)).toBeInTheDocument()
  })
})
