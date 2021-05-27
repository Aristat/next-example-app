import Link from 'next/link'
import { useDispatch } from 'react-redux'
import styles from './home.module.css'
import {
  APP_INCREMENT,
  APP_DECREMENT,
} from '../../constants/calculator'
import { selectCounter } from '../../selectors/calculator'

const reduxProps = () => {
  const dispatch = useDispatch()
  const increment = () => dispatch({
    type: APP_INCREMENT,
  })
  const decrement = () => dispatch({
    type: APP_DECREMENT,
  })
  return { increment, decrement }
}

const Home = () => {
  const counter = selectCounter()
  const { increment, decrement } = reduxProps()

  return (
    <div className={styles.Home}>
      <header className={styles.HomeHeader}>
        <h1 className="title">
          Read
          {' '}
          <p>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </p>
        </h1>
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className={styles.HomeLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click me
        </a>

        <p>
          {counter}
        </p>

        <button type="button" onClick={increment}>Click Increment</button>
        <button type="button" onClick={decrement}>Click Decrement</button>
      </header>
    </div>
  )
}

export default Home
