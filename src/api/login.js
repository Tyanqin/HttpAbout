import instance from './MyAxios'
import ps from 'querystring'
import {ACCESS_ADDRESS} from '../conf/conf'

export const reqLogin =(params)=>(instance.post(`${ACCESS_ADDRESS}/tx/login/loginCheck`,ps.stringify(params)))

