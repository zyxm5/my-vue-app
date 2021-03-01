/*
 * @Author: zyxm5
 * @Date: 2021-03-01 14:56:51
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-01 15:03:02
 * @Description:
 */
import { log, auth, Message } from "@/utils";
import { Authorization } from "../constants";
import Loading from "../loading";

// 拦截器
export default {
  requestIntercepter(config) {
    Loading.show();
    const token = auth.getToken();
    if (token) {
      config.headers[Authorization] = token;
    }
    return config;
  },
  responseIntercepter(response) {
    Loading.hide();
    if (response.status === 200) {
      const res = response.data;
      if (res.success || res.result) {
        return res;
      } else {
        log.error(response);
        Message.error(res.msg);
        return Promise.reject(response);
      }
    } else {
      if (response.status === 401) {
        auth.removeToken();
      } else {
        return Promise.reject(response);
      }
    }
  }
};
