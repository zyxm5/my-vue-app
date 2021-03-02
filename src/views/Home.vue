<!--
 * @Author: zyxm5
 * @Date: 2021-03-01 15:28:45
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 08:43:31
 * @Description: 
-->
<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld
      :msg="msg"
      @changeMsg="msg = $event"
    />
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
    data(){
      return{
        msg: "Welcome to Your Vue.js App"
      }
    }
};
</script>
