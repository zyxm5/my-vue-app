/*
 * @Author: zyxm5
 * @Date: 2021-03-01 13:19:37
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 10:27:44
 * @Description:
 */
module.exports = {
    map: false,
    plugins: {
        // https://github.com/csstools/postcss-preset-env
        "postcss-preset-env": {
            // 去掉兼容语法
            preserve: false,
            features: {
                "nesting-rules": true,
            },
        },
        // https://github.com/meltifa/postcss-pixel-to-viewport
        // "postcss-pixel-to-viewport": {
        //     // 尺寸比例 原始尺寸 1920 * 1080
        //     viewportWidth: 1920,
        //     viewportUnit: "vw",
        // },
    },
};
