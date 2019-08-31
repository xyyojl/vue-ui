---
title: Container - 容器布局
---
# Container 容器布局

用于布局的容器组件，方便快速搭建页面的基本结构：

`<g-layout>`: 外层容器，当子元素中包含 `<g-header>` 或 `<g-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<g-header>`：顶栏容器。

`<g-content>`: 主要区域容器。

`<g-sider>`: 侧边栏容器。

`<g-footer>`: 底栏容器。

**关于浏览器兼容性的提示**

> 以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<g-layout>` 的子元素只能是后四者，后四者的父元素也只能是 `<g-layout>`。

##  需求演示

- 布局一

<ClientOnly>
  <layout-demo1></layout-demo1>
</ClientOnly>

```html
<g-layout style="color: white;">
    <g-header style="height: 50px; background:lightskyblue;">
        header
    </g-header>
    <g-content style="height: 100px; background:deepskyblue;">
        content
    </g-content>
    <g-footer style="height: 50px; background:lightskyblue;">
        footer
    </g-footer>
</g-layout>
```

- 布局二

<ClientOnly>
  <layout-demo2></layout-demo2>
</ClientOnly>

```html
<g-layout style="color: white; overflow:hidden;">
    <g-header style="height: 50px; background:lightskyblue;">
        header
    </g-header>
    <g-layout>
        <g-sider style="height: 100px; background: #7cb8ff; width:200px; color: black;">
            sider
        </g-sider>
        <g-content style="height: 100px; background:deepskyblue;">
            content
        </g-content>
    </g-layout>
    <g-footer style="height: 50px; background:lightskyblue;">
        footer
    </g-footer>
</g-layout>
```

- 布局三

<ClientOnly>
  <layout-demo3></layout-demo3>
</ClientOnly>

```html
<g-layout style="color: white; overflow:hidden;">
    <g-sider style=" background: #7cb8ff; width:200px; color: black;">
        sider
    </g-sider>
    <g-layout>
        <g-header style="height: 50px; background:lightskyblue;">
            header
        </g-header>
        <g-content style="height: 100px; background:deepskyblue;">
            content
        </g-content>
        <g-footer style="height: 50px; background:lightskyblue;">
            footer
        </g-footer>
    </g-layout>
</g-layout>
```



