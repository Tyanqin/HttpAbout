import instance from './MyAxios'
import ps from 'querystring'
import {ACCESS_ADDRESS} from '../conf/conf'

export const initFrom =()=>(instance.get(`${ACCESS_ADDRESS}/tx/login/initForm`))
export const reqLogin =(params)=>(instance.post(`${ACCESS_ADDRESS}/tx/login/loginCheck`,ps.stringify(params)))

