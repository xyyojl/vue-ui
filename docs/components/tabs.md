---
title: Tabs - 标签页
---
# Tabs 标签页

## 需求分析

- 默认选中第一项
- 禁用某一项
- 可添加图标


<ClientOnly>
  <tabs-demos></tabs-demos>
</ClientOnly>

``` html
<g-tabs :selected="selected">
    <g-tabs-head>
        <g-tabs-item name="1">tab 1</g-tabs-item>
        <g-tabs-item name="2" disabled>tab 2</g-tabs-item>
        <g-tabs-item name="3">tab 3</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
        <g-tabs-pane name="3">content 3</g-tabs-pane>
    </g-tabs-body>
</g-tabs>
```

## Attributes 

| 参数          | 说明           | 类型    | 可选值 | 默认值 |
| ------------- | -------------- | ------- | ------ | ---- |
| selected | 默认选中某一项 | String  | —— | name值 |
| disabled      | 是否禁用       | Boolean | —— | false |
| name          | 每一项的名字   | String  | —— | 必须写 |