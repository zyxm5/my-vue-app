/*
 * @Author: zyxm5
 * @Date: 2021-02-24 10:09:04
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-01 15:06:57
 * @Description:
 */
module.exports = {
  map: false, //关闭source-map
  plugins: {
    "postcss-preset-env": {
      // 去掉兼容语法
      preserve: false,
      features: {
        "nesting-rules": true
      }
    },
    "postcss-pixel-to-viewport": {
      // 尺寸比例 原始尺寸 1920 * 1080
      viewportWidth: 1920,
      viewportUnit: "vw"
    }
  }
};
