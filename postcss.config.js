/*
 * @Author: zyxm5
 * @Date: 2021-03-01 13:19:37
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-01 14:27:45
 * @Description:
 */
module.exports = {
    map: false,
    plugins: {
        "postcss-preset-env": {
            // 去掉兼容语法
            preserve: false,
            features: {
                "nesting-rules": true,
            },
        },
    },
};
