import PropTypes from 'prop-types'
import Head from '../head'

const Layout = ({ children }) => (
  <div>
    <Head />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.objectOf(PropTypes.object),
}

export default Layout
