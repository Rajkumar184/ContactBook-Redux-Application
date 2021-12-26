import { combineReducers } from 'redux'
import { ContactReducers } from './ContactReducers'

const reducer = combineReducers({
  allReducers: ContactReducers,
})
export default reducer
