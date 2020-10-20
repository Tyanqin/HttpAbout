import Counter_Reducer from './counter_reducer'
import Home_Reducer from './home_reducer'

import {CombineReducers} from 'redux'

export default CombineReducers({
   counter:Counter_Reducer,
   home:Home_Reducer
})

