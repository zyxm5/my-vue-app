<!--
 * @Author: zyxm5
 * @Date: 2021-03-02 14:41:05
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 15:20:56
 * @Description: 
-->
<template>
  <!-- eslint-disable vue/no-mutating-props -->
  <input
    :value="value"
    type="text"
    @input="$emit('update:value', $event.target.value)"
  >
  <!-- <input
    v-model="modelValue"
    type="text"
  > -->
  <!-- <input
    :value="modelValue"
    type="text"
    @input="$emit('update:modelValue', $event.target.value)"
  > -->
</template>
<script>
export default {
    props: {
        value: {
            type: String,
        },
        modelValue: {
            type: String,
            required: true
        }
    }
}
</script>
