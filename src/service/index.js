import Vue from 'vue'
import axios from 'axios'
import { Notification, Message } from 'element-ui'
import listApis from './api.js'
import FetchMock from './mock/index.js'

Vue.prototype.$http = axios
const BASEURL = 'https://www.easy-mock.com/mock/5d3ac832f6f70a6a90216b78/mySite'
var apiPrefix = BASEURL

var Test = !1
var Service = {}
var axiosObj = axios.create({
  timeout: 30000
})

axiosObj.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Message({
      message: '错误的传参',
      type: 'error',
      duration: 1000
    })
    Promise.reject(error)
  }
)
axiosObj.interceptors.response.use(
  response => {
    return Promise.resolve(response.data.data)
  },
  err => {
    const {
      response: { status, statusText }
    } = err
    Notification({
      title: '错误',
      type: 'error',
      message: `${status}, ${statusText}`,
      duration: 3 * 1000
    })
    return Promise.reject(err)
  }
)

function formatURL (URL, params) {
  var reg = /\/\{(.+?)\}/g
  if (reg.test(URL)) {
    return URL.replace(reg, ($0, $1) => {
      return '/' + params[$1]
    })
  }
  return URL
}

listApis(apiPrefix).forEach(v => {
  if (Service[v[0]]) {
    Message('接口名称:' + v[0] + '已被占用，请修改！', 'fail')
    return false
  }
  Service[v[0]] = params => {
    var settings = {
      url: formatURL(v[1], params),
      method: v[2] || 'GET',
      data: params || {}
    }

    if (v[3] === 'blob') {
      settings.responseType = v[3]
    }
    return Test ? FetchMock(v[0], settings) : axiosObj(settings)
  }
})

export default (window.Service = Service)
