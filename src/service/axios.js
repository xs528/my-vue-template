import axios from 'axios'
import Vue from 'vue'

const api = {
  /*
   * GET /api/user/get_info 获取用户信息
   */
  getUserInfo: '/job/api/user/get_info',
}

axios.defaults.timeout = 60000

axios.interceptors.response.use(response => {
  // 会话过期，请重新登录
  if (response.data.state === 301) {
    
  }
  return response
}, err => {
  return err
})

export default {
  get(name, data) {
    return axios.get(api[name], {
      params: data || {}
    })
  },
  post(name, data, options) {
    return axios.post(api[name], data, options)
  }
}
