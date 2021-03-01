/*
 * @Author: zyxm5
 * @Date: 2021-01-20 13:21:39
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-01 15:09:19
 * @Description: axios配置
 */
import axios from "axios";
import { BASE_URL, BPM_BASE_URL } from "./constants";
import interceptors from "./intercepters";

// api基础路径
// axios.defaults.baseURL = BASE_URL;

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

// 创建axios实例
const _axios = axios.create(config);
_axios.defaults.baseURL = BASE_URL;
[_axios].forEach(e =>
  e.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      return interceptors.requestIntercepter(config);
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
  )
);

// Add a response interceptor
[_axios].forEach(e =>
  e.interceptors.response.use(
    function(response) {
      // Do something with response data
      return interceptors.responseIntercepter(response);
    },
    function(error) {
      // Do something with response error
      return Promise.reject(error);
    }
  )
);

[_axios].forEach(
  e =>
    (e.formData = (url, payload) => {
      const data = new FormData();
      for (const key in payload) {
        data.append(key, payload[key]);
      }
      return e.post(url, data);
    })
);
[_axios].forEach(e => {
  e.formDataPost = (url, payload) => e.formData(url, payload);
});
export default _axios;
