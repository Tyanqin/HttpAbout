import {ADD,SUB,EVENTADD} from '../actionType'
let initValue = 0

export default function  counterReducer (state=initValue,action){
         let {data,type} =  action
         let newState = null;
        switch (type) {
          case ADD:
               newState = state+data*1
               return newState;
          case SUB:
               newState = state-data*1
               return newState
          case EVENTADD:
               newState = state + data*1
               return newState
          default:
            return state
        }
}