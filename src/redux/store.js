import {createStore,applyMiddleware} from 'redux'
import './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import  thunk from 'redux-thunk'


export default createStore(Counter_Reducer,composeWithDevTools(applyMiddleware(thunk)))


