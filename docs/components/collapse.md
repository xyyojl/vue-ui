---
title: Collapse - 折叠面板
---
# Collapse 折叠面板

## 基础用法

Collapse 组件的默认效果即可同时展开多个面板，且面板之间不影响。 

<ClientOnly>
  <collapse-demo1></collapse-demo1>
</ClientOnly>


``` html
<g-collapse :selected.sync="selectedTab">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
```

可添加参数 single，每次只展开一个面板: 

<ClientOnly>
  <collapse-demo2></collapse-demo2>
</ClientOnly>

```html
<g-collapse :selected.sync="selectedTab" single>
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
```
##  Attributes `g-collapse`

| 参数     | 说明                                                         | 类型    | 可选值 | 默认值 |
| -------- | ------------------------------------------------------------ | ------- | ------ | ------ |
| single   | 是否同时只能展开一个面板                                     | Boolean | ——     | false  |
| selected | 一个由当前展开面板的 name 组成的数组。可以用 .sync 修饰符绑定。 | Array   | ——     | ——     |

##  Attributes `g-collapse-item`

| 参数  | 说明                 | 类型   | 可选值 | 默认值 |
| ----- | -------------------- | ------ | ------ | ------ |
| name  | 面板唯一标志符，必填 | String | ——     | ——     |
| title | 面板标题             | String | ——     | ——     |

