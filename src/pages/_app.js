import App from 'next/app'
import '../styles/global.css'
import { Provider } from 'react-redux'
import { mergeDeepRight } from 'ramda'
import PropTypes from 'prop-types'
import { useStore } from '../store/store'
import Layout from '../components/layout'

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.objectOf(PropTypes.any),
}

MyApp.getInitialProps = async context => {
  const appProps = await App.getInitialProps(context)
  const newProps = mergeDeepRight(appProps, { pageProps: { language_1: 'test_l' } })

  return newProps
}

export default MyApp
