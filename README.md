# 一个 Vue UI 组件

[![Build Status](https://travis-ci.org/xyyojl/vue-ui.svg?branch=master)](https://travis-ci.org/xyyojl/vue-ui)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用
1. 安装

    使用本框架之前，请在 CSS 中 开启 border-box

    ```css
    *，*::bofore,*::after{box-sizing:border-box;}
    ```

    IE 8 及以上浏览器都支持此样式。

    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）

    ```html
    :root{
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```

    IE 15 及以上浏览器都支持此样式。

2. 安装 vue-ui

    ```
    npm i vue-ui --save
    ```

3. 引入 vue-ui

    ```
    import {Button, ButtonGroup, Icon} from 'xyyojl-test-1'
    import 'xyyojl-test-1/dist/index.css'
    
    export default {
        name: 'app',
        components: {
        'g-button': Button,
        'g-icon': Icon
        }
    }
    ```

    

## 文档





## 提问



## 变更记录



## 联系方式



## 贡献代码





作者：xyyojl


