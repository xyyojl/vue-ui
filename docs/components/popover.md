---
title: Popover - 弹出框
---
# 弹出层

## 基础用法

`trigger` 属性用于设置何时触发 Popover 组件，支持两种触发方式：click、hover。 

<ClientOnly>
  <popover-demo1></popover-demo1>
</ClientOnly>

``` html
<g-popover trigger="click">
    <template slot="content">
    <div>click 触发</div>
    </template>
    <g-button>click 触发</g-button>
</g-popover>
<g-popover trigger="hover">
    <template slot="content">
    <div>hover 触发</div>
    </template>
    <g-button>hover 触发</g-button>
</g-popover>
```

## 展示方向

Popover 组件的 `position` 属性用于设置弹出框展示的方向，有四个可选方向：top、left、right、bottom，默认为 top。 

<ClientOnly>
  <popover-demo2></popover-demo2>
</ClientOnly>

``` html
<g-popover position="left">
    <template slot="content">
    <div>popover内容</div>
    </template>
    <g-button>左边</g-button>
</g-popover>
<g-popover>
    <template slot="content">
    <div>popover内容</div>
    </template>
    <g-button>上面</g-button>
</g-popover>
<g-popover position="bottom">
    <template slot="content">
    <div>popover内容</div>
    </template>
    <g-button>下面</g-button>
</g-popover>
<g-popover position="right">
    <template slot="content">
    <div>popover内容</div>
    </template>
    <g-button>右边</g-button>
</g-popover>
```
## Attributes

| 参数       | 说明                                                         | 类型     | 可选值                         | 默认值 |
| ---------- | ------------------------------------------------------------ | -------- | ------------------------------ | ------ |
| position   | popover 显示的位置                                           | String   | top \| botter \| left \| right | top    |
| trigger    | popover 触发的方式                                           | String   | click \| hover                 | click  |
| template   | popover 的内容，slot 必须为 content                          | tempalte | ——                             | ——     |
| slot-scope | 如果需要在 popover 内添加关闭 popover 的设置，则需要 slot-scope 引用 close 方法 | Object   | ——                             | ——     |