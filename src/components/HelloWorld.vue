<!--
 * @Author: zyxm5
 * @Date: 2021-03-01 10:42:28
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 17:45:24
 * @Description: 
-->
<template>
  <h1>{{ msg }}</h1>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      b: 1,
      value: ""
    };
  },
  mounted() {
    this.b = 1;
  },
  methods: {
    pushRoot() {
      this.roots.push(4);
    }
  }
};
</script>
