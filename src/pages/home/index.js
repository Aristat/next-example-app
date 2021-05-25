import HomeComponent from '../../components/home';
import {initializeStore} from "../../store/store";
import { mergeDeepRight } from 'ramda'

export default function Home(props) {
  console.log('props: ', props)

  return (
    <HomeComponent />
  )
}

export async function getServerSideProps(context) {
  console.log('getServerSideProps home')

  // Get data from backend API
  const backendProps = {
    calculatorReducer: {
      counter: 99,
    },
  }

  const reduxStore = initializeStore(backendProps)

  return mergeDeepRight(
    { props: { initialReduxState: reduxStore.getState() } },
    { props: { language_2: 'test_2' } }
  )
}
