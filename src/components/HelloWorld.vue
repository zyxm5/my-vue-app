<!--
 * @Author: zyxm5
 * @Date: 2021-03-01 10:42:28
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 17:29:44
 * @Description: 
-->
<template>
  <h1>{{ msg }}</h1>
</template>
<script>
import { toRefs, ref, h, inject, onMounted } from "vue";
export default {
    props: {
        msg: {
            type: String,
            required: true
        }
    },
    setup(props, context) {
        const list = ref([1,2,3]);
        const roots = ref([]);
        return {
            list,
            roots
        }
    },
    data(){
        return{
            b: 1,
            value: ""
        }
    },
    mounted(){
        this.b = 1;
        // this.$set(this, 'a', 2);
    },
    methods: {
        pushRoot(){
            this.roots.push(4);
        }
        
    }
};
</script>
<style lang="postcss" scoped>
@import url("@/css/index.css");
.endofbody{
    background-color: #f40;
}
</style>