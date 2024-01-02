// import {$post} from '../utils/request'

// export const $submitForm = async (data) => {
//     let msg = axios({
//             url: "http://localhost:3000/api/uploadform",
//             method: "post",
//             headers: { "content-type": "application/json" },
//             data: data,
//           });
//     return msg
// }


import { http } from '../utils/request'

export function uploadform(data) {
    return http({
        url: '/api/uploadform',
        method: 'post',
        data
    })
}



export function executePart(params) {
    return http({
        url: '/api/xxx',
        method: 'get',
        params
    })
}
