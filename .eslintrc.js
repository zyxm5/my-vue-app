/*
 * @Author: zyxm5
 * @Date: 2021-03-02 10:14:38
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 10:16:48
 * @Description: eslint规则配置
 */
module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        "plugin:vue/vue3-strongly-recommended",
        // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
    },
};
