<!--
 * @Author: zyxm5
 * @Date: 2021-03-01 10:42:28
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-01 14:12:40
 * @Description: 
-->
<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style lang="postcss" scoped>
@import url('@/css/index.css');
p{
  color: var(--mainColor);
  & a{
    color: #008c8c;
  }
  &::after{
    content: '123'
  }
}
</style>