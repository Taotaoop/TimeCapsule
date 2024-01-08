import { http } from '../utils/request'

export function userLogin(data) {
    return http({
        url: '/api/test',
        method: 'post',
        data
    })
}