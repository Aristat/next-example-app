import { useSelector, useDispatch } from 'react-redux'
import {APP_SET_RANDOM_NUMBER} from "../../constants/posts";

const reduxProps = () => {
  const randomNumber = useSelector((state) => state.postsReducer.randomNumber)
  const posts = useSelector((state) => state.postsReducer.posts)
  const dispatch = useDispatch()
  const setRandomNumber = () =>
    dispatch({
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

        <button onClick={setRandomNumber}>Set random number</button>
      </div>
    </div>
  )
}

export default Blog;
