<!--
 * @Author: zyxm5
 * @Date: 2021-03-01 15:28:45
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 17:21:00
 * @Description: 
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <teleport to="#app">
      <HelloWorld :msg="msg" />
    </teleport>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
