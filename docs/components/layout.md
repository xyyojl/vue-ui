---
title: Gird - 网格布局
---
# 网格
## 需求演示

- 三栏布局/不等分布局
- 设置 gutter / offset
- 实现响应式布局

### 三栏布局/不等分布局

通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局 

<ClientOnly>
  <grid-demo1></grid-demo1>
</ClientOnly>

```html
<g-row>
    <g-col span="8">1</g-col>
    <g-col span="8">2</g-col>
    <g-col span="8">3</g-col>
</g-row>
<g-row>
    <g-col span="2">1</g-col>
    <g-col span="22">2</g-col>
</g-row>
```

### 设置 gutter / offset

通过传入 `gutter` 或者 `offset` 属性设置分栏间隙 
<ClientOnly>
  <grid-demo2></grid-demo2>
</ClientOnly>

```html
<g-row gutter="10">
    <g-col :ipad="{span:'6'}"><div>间隔 10px</div> </g-col>
    <g-col :ipad="{span:'18'}"><div>间隔 10px</div></g-col>
</g-row>
<g-row >
    <g-col span="1" > 1</g-col>
    <g-col span="22" offset="1">2</g-col>
</g-row>
```

### 实现响应式布局

设置多个配置参数，实现响应式布局 
<ClientOnly>
  <grid-demo3></grid-demo3>
</ClientOnly>

```html
<g-row>
    <g-col
    span="2"
    :phone="{span:'23'}"
    :ipad="{span:'18'}"
    :narrow-pc="{span:'14'}"
    :wide-pc="{span:'4'}"
    >1</g-col>
    <g-col
    span="22"
    :phone="{span:'1'}"
    :ipad="{span:'6'}"
    :narrow-pc="{span:'10'}"
    :wide-pc="{span:'20'}"
    >2</g-col>
</g-row>
<g-row>
    <g-col
    span="22"
    :phone="{span:'1'}"
    :ipad="{span:'6'}"
    :narrow-pc="{span:'10'}"
    :wide-pc="{span:'20'}"
    >2</g-col>
    <g-col
    span="2"
    :phone="{span:'23'}"
    :ipad="{span:'18'}"
    :narrow-pc="{span:'14'}"
    :wide-pc="{span:'4'}"
    >1</g-col>
</g-row>
```

## Attributes

| 参数      | 说明                                            | 类型             | 可选值 | 默认值 |
| --------- | ----------------------------------------------- | ---------------- | ------ | ------ |
| gutter    | 栅格间的间隙，单位为 px                         | String \| Number | ——     | ——     |
| offset    | 栅格的左边距                                    | String \| Number | ——     | 0      |
| span      | 栅格的宽度                                      | String \| Number | ——     | 12     |
| phone     | 栅格在设备屏幕宽度为 min-width: 0px 时的宽度    | Object           | ——     | ——     |
| ipad      | 栅格在设备屏幕宽度为 min-width: 577px 时的宽度  | Object           | ——     | ——     |
| narrow-pc | 栅格在设备屏幕宽度为 min-width: 769px 时的宽度  | Object           | ——     | ——     |
| wide-pc   | 栅格在设备屏幕宽度为 min-width: 1201px 时的宽度 | Object           | ——     | ——     |