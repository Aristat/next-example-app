import Link from 'next/link'
import { useDispatch } from 'react-redux'
import styles from './home.module.css'
import { selectCounter } from '../../selectors/calculator'
import { updateIncrement, updateDecrement } from '../../actions/calculator'

const Home = () => {
  const counter = selectCounter()
  const dispatch = useDispatch()
  const handleIncrement = () => {
    updateIncrement(dispatch)
  }
  const handleDecrement = () => {
    updateDecrement(dispatch)
  }

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

        <button type="button" onClick={handleIncrement}>Click Increment</button>
        <button type="button" onClick={handleDecrement}>Click Decrement</button>
      </header>
    </div>
  )
}

export default Home
