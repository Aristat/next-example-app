import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { selectRandomNumber, selectPosts } from '../../selectors/posts'
import { updateRandomNumber, updateIncrement } from '../../actions/posts'

const Blog = () => {
  const dispatch = useDispatch()
  const randomNumber = selectRandomNumber()
  const posts = selectPosts()
  const handleRandomNumber = async () => {
    await updateRandomNumber(dispatch)
  }
  const handleIncrement = async () => {
    await updateIncrement(dispatch)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Trending Projects</h1>
      <div>
        {posts ? posts.map(post => (
          <p key={post.name}>
            <span>{post.name}</span>
          </p>
        ))
          : 'loading...'}
      </div>
      <div>
        <p>
          Random number
          {' '}
          {randomNumber}
        </p>

        <button type="button" onClick={handleRandomNumber}>
          Set random number
        </button>
        <button type="button" onClick={handleIncrement}>
          Increment
        </button>
      </div>
      <div>
        <p>
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Blog
