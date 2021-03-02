/*
 * @Author: zyxm5
 * @Date: 2021-03-02 17:43:13
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 17:51:59
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
