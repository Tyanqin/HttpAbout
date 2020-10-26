import {INITFROM} from '../actionType'

let initValue = {token:'123'}

export default function reducer(state = initValue,action){
    const{type,data} = action
    let newSate = {}
    switch (type) {
        case INITFROM :
            state = {"token":data}
            newSate = state
            return newSate
        default:
            return state
    }
}