import { ADD, SUB, EVENTADD, ASYNCADD } from '../actionType'

export const add=(value)=>({type:ADD,data:value})

export const sub=(value)=>({type:SUB,data:value})

export const eventAdd =(value)=>({type:EVENTADD,data:value})

export const asyncAdd = (value)=>({type:ASYNCADD,data:value})

