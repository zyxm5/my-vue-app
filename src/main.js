/*
 * @Author: zyxm5
 * @Date: 2021-03-01 10:56:44
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 17:52:06
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import base from "@/components/base";
import "@/styles";

Vue.use(base);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
