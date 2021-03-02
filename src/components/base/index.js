/*
 * @Author: zyxm5
 * @Date: 2021-03-02 17:33:32
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 17:58:05
 * @Description:
 */
import BaseAnchoredHeading from "./BaseAnchoredHeading.vue";
const components = [BaseAnchoredHeading];
export default {
  install(app) {
    components.forEach(e => {
      app.component(e.name, e);
    });
  }
};
