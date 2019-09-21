import axios from 'axios'
import { Message } from 'element-ui'
// import store from '@/store'
import Qs from 'qs'
// import { getToken, logout } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000, // request timeout
  paramsSerializer: function (params) {
    return Qs.stringify(params)
  }
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // if (getToken()) {
    //   config.headers['Authorization'] = 'Bearer ' + getToken()
    // }
    // return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    // return Promise.reject(error)
    Message.closeAll()
    Message({
      message: '请求超时！',
      type: 'error',
      duration: 3 * 1000
    })
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    if (res && res.code === 0) {
      return res
    } else {
      if (res.code === 100001 || res.code === 100002) {
        // token认证失败 或者 账号已失效，则返回登陆页面
        // logout()
      } else {
        Message({
          message: res.msg,
          type: 'error',
          duration: 5 * 1000,
          showClose: true
        })
      }
    }
  },
  error => {
    try {
      if (error && error.response) {
        let res = error.response.data
        let showMsg = true
        switch (error.response.status) {
          case 400:
            res.msg = '请求错误'
            break
          case 401:
            res.msg = ''
            showMsg = false
            logout()
            break
          case 403:
            res.msg = '无权限访问'
            break
          case 404:
            res.msg = '未找到请求路径'
            break
          default:
            res.msg = res.msg || '连接服务器错误'
            break
        }
        Message.closeAll()
        if (showMsg) {
          Message({
            message: res.msg,
            type: 'error',
            duration: 5 * 1000,
            showClose: true
          })
        }
        return Promise.reject(error.response)
      }
    } catch (error) {
      console.log(error, '')
    }
  }
)

// function handleErr(res) {
//   let errMsg = res.msg
//   const code = res.code

//   if (code in ErrCode) {
//     errMsg = ErrCode[code]
//     if (code === 100001 || code === 100002) {
//       // to re-login
//       MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
//         confirmButtonText: 'Re-Login',
//         cancelButtonText: 'Cancel',
//         type: 'warning'
//       }).then(() => {
//         store.dispatch('user/resetToken').then(() => {
//           location.reload()
//         })
//       })
//     }
//   }

//   Message({
//     message: errMsg,
//     type: 'error',
//     duration: 5 * 1000
//   })
// }

export default service
