import axios from 'axios'
import qs from 'querystring'
import {message} from 'antd'
import Nprgresss from 'nprogress'
import 'nprogress/nprogress.css'

const instance = axios.create({
  timeout:4000
})

//请求拦截器
instance.interceptors.request.use(function(config){
    Nprgresss.start()
    const {method,data} = config
    if(method.toLocaleLowerCase === 'post'){
          if(data instanceof  Object){
             config.data = qs.stringify(data)
          }
    }
    return config;
})

//响应拦截器
instance.interceptors.response.use(
  respons=>{
   Nprgresss.done()
  return respons.data;
}, (error => {
   Nprgresss.done()
    message.error(error.message,2);
    return new Promise(()=>{})
  })
  )

export default instance