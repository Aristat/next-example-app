import Home from './home'
import {connect} from "react-redux";
import {
  APP_INCREMENT,
  APP_DECREMENT,
} from '../../constants/simple_operations'


const mapStateToProps = state => ({
  counter: state.simple_operations.appProps.counter,
})

const mapDispatchToProps = dispatch => ({
  onClickIncrement: () => dispatch({ type: APP_INCREMENT }),
  onClickDecrement: () => dispatch({ type: APP_DECREMENT }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
