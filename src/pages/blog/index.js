import BlogComponent from '../../components/blog'
import { initializeStore } from '../../store/store'

export default function Blog(props) {
  console.log('props: ', props)

  return (
    <BlogComponent />
  )
}

export async function getServerSideProps() {
  // Get data from backend API
  const backendProps = {
    postsReducer: {
      posts: [
        { name: 'hello' },
        { name: 'hi' },
        { name: 'bye' },
      ],
      randomNumber: 0,
    },
  }

  const reduxStore = initializeStore(backendProps)

  return { props: { initialReduxState: reduxStore.getState() } }
}
