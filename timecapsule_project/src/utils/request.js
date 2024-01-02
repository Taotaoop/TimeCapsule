import axios from 'axios';
import {message} from 'ant-design-vue';
import router from '../router'
const showError = (value) => {
    message.error(value)
}
const showWarning = (value) => {
    message.warn(value)
}
const getToken = () => {
    // 获取token
    // return jsCookie.get('')
}

/**
 * 最基础的配置
 */
const isProduction = process.env.NODE_ENV === 'production'

const fetch = axios.create({
    timeout: 600 * 1000,
})

const request = (config) => {
     console.log(isProduction)
    if (!isProduction) {
        config.url = `http://localhost:3000${config.url}`
    } else {
        config.url = `/${config.url}`
    }

    config.headers.token = getToken()

    return config
}

const response = (response) => {
    const ourConfig = response.config.ourConfig
    const data = response.data
    switch (response.status) {
        case 200:
            switch (response.data.resultStatus) {
                case 0:
                    return response.data.data;
                case 200:
                    return response.data.data;
                case 205: //工作台登录过期
                    break
                case 203:
                    break
                default:
                    if (response.data && response.data.msg) {
                        showError(response.data.msg)
                    }
                    return Promise.reject(response.data)
            }
        case 401:
            showWarning('未登录或登录失效')
            location.href = '/'

        default:
            return Promise.reject(response)
    }
}

const resError = (error) => {
    try {
        if (error.response.status === 401) {
            showWarning(error.response.data.msg)
            router.push({
                name: 'login',
                redirect: router.currentRoute.fullPath
            })
        } else {
            showError('服务器异常')
        }
    } catch {
    }
    return Promise.reject(error)
}


fetch.interceptors.request.use(request)
fetch.interceptors.response.use(response, resError)

export const http = fetch
