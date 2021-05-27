import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { APP_SET_RANDOM_NUMBER } from '../../constants/posts'
import { selectRandomNumber, selectPosts } from '../../selectors/posts'

const reduxProps = () => {
  const dispatch = useDispatch()
  const setRandomNumber = () => dispatch({
    type: APP_SET_RANDOM_NUMBER,
  })
  return { setRandomNumber }
}

const Blog = () => {
  const randomNumber = selectRandomNumber()
  const posts = selectPosts()
  const { setRandomNumber } = reduxProps()

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
          {randomNumber}
        </p>

        <button type="button" onClick={setRandomNumber}>
          Set random number
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
