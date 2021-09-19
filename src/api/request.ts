import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const service = axios.create({
  baseURL: 'https://api.wondercv.cn',
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  },
  withCredentials: true,
  timeout: 30000,
  transformRequest: [data => {
    data = JSON.stringify(data);
    return data;
  }],
  validateStatus() {
    return true;
  },
  transformResponse: [(data) => {
    if (typeof data === 'string' && data.startsWith('{')) {
      data = JSON.parse(data)
    }
    return data
  }]
});

service.interceptors.request.use((response: any) => {
  const status = response.status
  let msg = ''
  if (status < 200 || status >= 300) {
    if (typeof response.data === 'string') {
      response.data = { msg }
    } else {
      response.data.msg = msg
    }
  }
  return response
}, error => {
  if (axios.isCancel(error)) {
    console.log('repeated request: ' + error.message)
  } else {
    // handle error code
    // 错误抛到业务代码
    error.data = {}
    error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
  }
  return Promise.reject(error)
});

export default service;