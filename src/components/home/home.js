import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { path } from 'ramda'
import styles from './home.module.css'
import {
  APP_INCREMENT,
  APP_DECREMENT,
} from '../../constants/calculator'

const reduxProps = () => {
  const counter = useSelector(state => path(['calculatorReducer', 'counter'], state))
  const dispatch = useDispatch()
  const increment = () => dispatch({
    type: APP_INCREMENT,
  })
  const decrement = () => dispatch({
    type: APP_DECREMENT,
  })
  return { counter, increment, decrement }
}

const Home = () => {
  const { counter, increment, decrement } = reduxProps()

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
