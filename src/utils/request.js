/**
 * axios 二次封装
 */
import axios from "axios"
import config from "./../config"
import { ElMessage } from "element-plus"
import router from './../router'

const TOKEN_INVALID = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'

// 创建axios实例对象，添加全局配置
const service = axios.create({
    baseURL:config.baseApi,
    timeout:8000,
})

/**
 * 请求拦截
 * @desc Add a request interceptor
 */
service.interceptors.request.use(function(request) {
    // TO-DO 在拦截时，动态添加token值
    const headers = request.headers
    // 判断headers是否有Auth，没有就赋值Auth
    if(!headers.Authorization) headers.Authorization = 'Bearer Erika'
    return request
},function (error) {
    return Promise.reject(error)
})

/**
 * 响应拦截
 * @desc Add a response interceptor
 */
service.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // response是http的状态码，data是接口本身返回的状态码
    const { code, data, msg }  = response.data
    if(code === 200) {
        return data
    }else if(code===40001) {
        ElMessage.error(TOKEN_INVALID)
        setTimeout(() => {
            router.push('/login')
        }, 1500)
        return Promise.reject(TOKEN_INVALID)
    }else {
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
  }, function (error) {
    return Promise.reject(error);
  });

/**
 * 请求的核心函数
 * @param {*} options 请求配置
 * @returns service(options)  axios.create实例对象的请求配置
 */
function request(options) {
    options.methods = options.method || 'get'
    if(options.method.toLowerCase() === 'get'){
        options.params = options.data
    }
    if(config.env === 'prod') {
        service.defaults.baseURL = config.baseApi
    }else {
        service.defaults.baseURL = config.mock ? config.mockApi:config.baseApi
    }
    return service(options)
}

['get','post','put','delete','patch'].forEach((item)=>{
    request[item] = (url,data,options)=> {
        return request({
            url,
            data,
            method:item,
            ...options
        })
    }
})

export default request