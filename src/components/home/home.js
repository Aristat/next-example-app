import React, { Component } from 'react'
import styles from './home.module.css';
import Link from 'next/link'

class Home extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <h1 className="title">
            Read{' '}
            <Link href="/posts/first-post">
              <a>this page!</a>
            </Link>
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
            {this.props.counter}
          </p>

          <button onClick={this.props.onClickIncrement}>Click Increment</button>
          <button onClick={this.props.onClickDecrement}>Click Decrement</button>
        </header>
      </div>
    );
  }
}

export default Home;
