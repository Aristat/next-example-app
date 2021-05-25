import App from 'next/app'
import '../styles/global.css'
import { Provider } from 'react-redux';
import {useStore} from "../store/store";
import Layout from '../components/layout'
import {mergeDeepRight} from "ramda";

const MyApp = ({ Component, pageProps  }) => {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

MyApp.getInitialProps = async context => {
  const appProps = await App.getInitialProps(context)
  const data = mergeDeepRight(appProps, { pageProps: { language_1: 'test_l' } })

  console.log('getInitialProps data: ', data)

  return data
}

export default MyApp
