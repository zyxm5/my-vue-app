/*
 * @Author: zyxm5
 * @Date: 2021-03-01 10:42:28
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 17:40:03
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import base from  '@/components/base';

createApp(App).use(base).use(router).use(store).mount('#app')
