import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  counter: state.simple_operations.appProps.counter,
})

const mapDispatchToProps = dispatch => ({
  onClickIncrement: () => dispatch({ type: 'APP_INCREMENT' }),
  onClickDecrement: () => dispatch({ type: 'APP_DECREMENT' }),
})

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
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
