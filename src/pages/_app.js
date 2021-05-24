import '../styles/global.css'
import { Provider } from 'react-redux';
import configureStore from "../utils/store";
import Layout from '../components/layout'

const MyApp = ({ Component, pageProps  }) => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
