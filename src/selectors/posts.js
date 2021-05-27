import { path } from 'ramda'
import { useSelector } from 'react-redux'
import { POST_REDUCER } from '../constants/posts'

export const selectRandomNumber = () => useSelector(path([POST_REDUCER, 'randomNumber']))
export const selectPosts = () => useSelector(path([POST_REDUCER, 'posts']))
