import { http } from '../utils/request'
import md5 from 'js-md5'
export function userLogin(data) {
    data.password = md5.hex(data.password)
    console.log(data)
    return http({
        url: '/api/test',
        method: 'post',
        data
    })
}