/*
 * @Author: zyxm5
 * @Date: 2021-03-01 10:42:28
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-01 14:27:12
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
const resolve = p => path.resolve(__dirname, p)


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  // 打包路径
  base: '/nest/'
})
