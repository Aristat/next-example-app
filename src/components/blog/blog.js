import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import { APP_SET_RANDOM_NUMBER } from '../../constants/posts'

const reduxProps = () => {
  const randomNumber = useSelector(state => state.postsReducer.randomNumber)
  const posts = useSelector(state => state.postsReducer.posts)
  const dispatch = useDispatch()
  const setRandomNumber = () => dispatch({
    type: APP_SET_RANDOM_NUMBER,
  })
  return { randomNumber, posts, setRandomNumber }
}

const Blog = () => {
  const { randomNumber, posts, setRandomNumber } = reduxProps()

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
