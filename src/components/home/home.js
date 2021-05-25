import styles from './home.module.css';
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import {
  APP_INCREMENT,
  APP_DECREMENT,
} from '../../constants/calculator'

const reduxProps = () => {
  const counter = useSelector((state) => state.calculatorReducer.counter)
  const dispatch = useDispatch()
  const increment = () =>
    dispatch({
      type: APP_INCREMENT,
    })
  const decrement = () =>
    dispatch({
      type: APP_DECREMENT,
    })
  return { counter, increment, decrement }
}

const Home = () => {
  const { counter, increment, decrement } = reduxProps()

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <h1 className="title">
          Read{' '}
          <p>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </p>
        </h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click me
        </a>

        <p>
          {counter}
        </p>

        <button onClick={increment}>Click Increment</button>
        <button onClick={decrement}>Click Decrement</button>
      </header>
    </div>
  )
}

export default Home;
