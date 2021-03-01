/*
 * @Author: zyxm5
 * @Date: 2021-03-01 10:42:28
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-01 16:57:58
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

createApp(App).use(router).use(store).mount('#app')
