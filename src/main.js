/*
 * @Author: zyxm5
 * @Date: 2021-03-01 10:56:44
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-01 15:18:06
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
