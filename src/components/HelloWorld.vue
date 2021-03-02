<!--
 * @Author: zyxm5
 * @Date: 2021-03-01 10:42:28
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 17:21:17
 * @Description: 
-->
<template>
  <h2>{{ msg }}</h2>
</template>
<script>
import { ref } from "vue";
export default {
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup() {
    const list = ref([1, 2, 3]);
    const roots = ref([]);
    return {
      list,
      roots
    };
  },
  data() {
    return {
      b: 1,
      value: ""
    };
  },
  mounted() {
    this.b = 1;
    // this.$set(this, 'a', 2);
  },
  methods: {
    pushRoot() {
      this.roots.push(4);
    }
  }
};
</script>
