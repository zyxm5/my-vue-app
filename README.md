<!--
 * @Author: zyxm5
 * @Date: 2021-03-01 15:43:51
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-02 16:38:25
 * @Description: 
-->
# cli-app

# Vue3 + Vuex + Vue-router + Vue-cli + axios

## 目录结构

```
|—— public 静态资源目录,打包时直接拷贝到dist中
    |—— config 配置文件,存放全局静态变量
    |—— img 图片,引入时,直接从根目录下引入
|—— src 源码目录
    |—— api 接口配置
        |—— intercepters 拦截器配置
        |—— 接口入口文件
        |—— ... 其他接口配置
    |—— assets 资源目录,图片
    |—— components 组件目录,为了便于区分,组件名称使用大驼峰
        |—— base 存放全局组件
        ... 局部组件
    |—— constants 存放常量
    |—— mixins 混入
    |—— plugins 注入Vue的插件
    |—— styles 样式相关
        |—— common 公共样式
        |—— constants 常量(颜色和字体)
        |—— index 入口
        |—— reset 样式重置
    |—— utils 工具类
    |—— views 入口
        ...
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
