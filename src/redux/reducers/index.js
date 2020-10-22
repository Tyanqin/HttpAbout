import CounterReducer from './counter_reducer'
import HomeReducer from './home_reducer'

import {combineReducers} from 'redux'

export default combineReducers({
  counter:CounterReducer,
  home:HomeReducer
})
