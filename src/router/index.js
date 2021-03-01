/*
 * @Author: zyxm5
 * @Date: 2021-03-01 15:45:23
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-01 16:53:26
 * @Description: 
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import { BASE_URL } from '@/constants';

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
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes
});

export default router;
