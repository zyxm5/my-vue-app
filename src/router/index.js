/*
 * @Author: zyxm5
 * @Date: 2021-03-01 15:45:23
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 17:51:19
 * @Description:
 */
import Home from "@/views/Home.vue";
import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  }
];

export default new VueRouter({
  base: process.env.BASE_URL,
  routes
});
