/*
 * @Author: zyxm5
 * @Date: 2020-12-25 16:06:10
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 16:43:39
 * @Description: vue-cli配置
 */
module.exports = {
  // 生产环境不生成sourceMap,加速打包
  productionSourceMap: false,
  // 项目根路径，取决于服务器映射地址
  publicPath: process.env.NODE_ENV === "production" ? "/deploy/" : "/",
  devServer: {
    // 开发服务器映射地址
    // proxy: "http://10.254.15.11:8080"
  },
  configureWebpack: {
    // resolve: {
    // extensions: [".js", ".json", ".vue", ".less"]
    // }
  }
};
