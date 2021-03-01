/*
 * @Author: zyxm5
 * @Date: 2021-02-08 13:35:11
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-01 15:03:51
 * @Description: 加载中
 */
import { Loading } from "element-ui";
let loading = null;
export default {
  show() {
    loading = Loading.service({
      lock: true,
      text: "请求中……",
      spinner: "el-icon-loading",
      background: "rgba(255, 255, 255, 0.2)"
    });
  },
  hide() {
    loading.close();
  }
};
