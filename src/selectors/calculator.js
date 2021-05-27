import { path } from 'ramda'
import { useSelector } from 'react-redux'

export const selectCounter = () => useSelector(path(['calculatorReducer', 'counter']))
