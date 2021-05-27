import { path } from 'ramda'
import { useSelector } from 'react-redux'

export const selectRandomNumber = () => useSelector(path(['postsReducer', 'randomNumber']))
export const selectPosts = () => useSelector(path(['postsReducer', 'posts']))
