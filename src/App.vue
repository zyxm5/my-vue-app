<!--
 * @Author: zyxm5
 * @Date: 2021-03-01 10:42:28
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 10:16:36
 * @Description: 
-->
<template>
  <button @click="book = 'css'">
    换本书
  </button>
  <router-view />
</template>
<script>
import { provide, ref } from "vue";
export default {
    setup() {
        const book = ref("javascript");
        provide("book", book);
        return {
            book
        };
    }
};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>