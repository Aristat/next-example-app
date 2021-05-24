import Head from 'components/head'

const Layout = ({
  children
}) => {
  return (
    <div>
      <Head />
      {children}
    </div>
  )
}

export default Layout
