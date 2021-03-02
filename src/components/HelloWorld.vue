<!--
 * @Author: zyxm5
 * @Date: 2021-03-01 10:42:28
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 10:05:07
 * @Description: 
-->
<template>
    <h1>{{ msg }}</h1>
    <h1>{{ book }}</h1>
</template>

<script>
import { toRefs, ref, h, inject } from "vue";
export default {
    props: {
        msg: {
            type: String,
            required: true
        }
    },
    setup(props, context) {
        // const count = ref(0);
        // return () => h('div', count.value)
        const book = inject('book')
        return {
            book
        }
    },
    methods: {
        changeCount(count) {
            this.count = count;
        }
    }
};
</script>
<style lang="postcss" scoped>
@import url("@/css/index.css");
p {
    color: var(--mainColor);
    & a {
        color: #008c8c;
    }
}
</style>