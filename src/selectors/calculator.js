import { path } from 'ramda'
import { useSelector } from 'react-redux'
import { CALCULATOR_REDUCER } from '../constants/calculator'

export const selectCounter = () => useSelector(path([CALCULATOR_REDUCER, 'counter']))
