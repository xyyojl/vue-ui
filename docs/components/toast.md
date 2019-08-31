---
title: Toast - 弹窗
---
# Toast 弹窗

## 使用方法

Toast 组件可以实现点击后弹窗的效果。因为是在点击后才显示在页面中的组件，因此使用方法与其他直接插入页面中的组件不同，您需要引入并使用 `plugin`，而不是直接引入 Toast 组件。具体方法如下： 

```html
<div id="#app">
  <button @click="showToast">顶部</button>
</div>
<script>
import Vue from 'vue'
import {plugin} from 'gaiety-ui'

Vue.use(plugin)

new Vue({
  el:"#app",
  methods: {
    showToast() {
      this.$toast('弹窗信息', { 
        closeButton: {
          text: '关闭'
        },
        autoClose: 5,
        enableHTML: false,
        position: "middle"
      })
    }
  }
};
</script>
```

##  Attributes

| 参数        | 说明                                           | 类型               | 可选值                                   | 默认值             |
| ----------- | ---------------------------------------------- | ------------------ | ---------------------------------------- | ------------------ |
| message     | 消息提示的文本                                 | String \| Template | ——                                       | ——                 |
| closeButton | 是否设置关闭按钮，及关闭按钮的文本以及回调函数 | Object             | ——                                       | ——                 |
| enableHtml  | 是否渲染 message 文本为 HTML                   | Boolean            | ——                                       | false              |
| autoClose   | 是否自动关闭 Toast                             | Boolean \| Number  | ——                                       | 2（2S 后自动关闭） |
| position    | Toast 出现的位置                               | String             | top \| bottom \| middle \| right \| left | middle             |

## 使用示例

下面是一个使用示例，点击不同的按钮，可以看到显示效果不同的弹窗。 

<ClientOnly>
  <toast-demos></toast-demos>
</ClientOnly>

``` html
<template>
  <div>
    <g-button @click="showToast1">顶部浮层</g-button>
    <g-button @click="showToast2">中部浮层</g-button>
    <g-button @click="showToast3">底部浮层</g-button>
  </div>
</template>
<script>
import Vue from 'vue'
import Button from "../../../src/button";
import plugin from "../../../src/plugin";
Vue.use(plugin);
export default {
  components: {
    "g-button": Button
  },
  methods: {
    showToast1() {
      this.showToast("top");
    },
    showToast2() {
      this.showToast("middle");
    },
    showToast3() {
      this.showToast("bottom");
    },
    showToast(position) {
      this.$toast("<p>我是 message</p>", {
        closeButton: {
          text: "关掉我",
          callback() {
            console.log("关掉我了");
          }
        },
        autoClose: 5,
        enableHTML: true,
        position
      });
    }
  }
};
</script>
```