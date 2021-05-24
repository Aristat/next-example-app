import React, { Component } from 'react'
import styles from './App.module.css';
import { connect } from 'react-redux';
import Link from 'next/link'

const mapStateToProps = state => ({
  counter: state.simple_operations.appProps.counter,
})

const mapDispatchToProps = dispatch => ({
  onClickIncrement: () => dispatch({ type: 'APP_INCREMENT' }),
  onClickDecrement: () => dispatch({ type: 'APP_DECREMENT' }),
})

class App extends Component {
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

          <button onClick={this.props.onClickIncrement}>Send Message DisplayChannel</button>
          <button onClick={this.props.onClickDecrement}>Send Message UserChannel</button>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
