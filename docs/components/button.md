---
title: Button - 按钮
---
# 按钮

## 需求演示

- 默认按钮
- 图标按钮
- 加载中状态
- 不可用状态
- 按钮组合状态

<ClientOnly>
  <button-demos></button-demos>
</ClientOnly>

```html
<g-button>按钮</g-button>
<g-button icon="settings">按钮</g-button>
<g-button :loading="true">按钮</g-button>
<g-button disabled>默认按钮</g-button>
<g-button-group>
  <g-button icon="left">上一页</g-button>
  <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
```
##  Attributes

| 参数          | 说明                | 类型    | 可选值       | 默认值 |
| ------------- | ------------------- | ------- | ------------ | ------ |
| icon          | 图标类名            | String  | ——           | ——     |
| icon-position | 图标位置            | String  | left / right | left   |
| loading       | 是否带 loading 效果 | Boolean | true / false | false  |
| disabled      | 是否禁用            | Boolean | true / false | false  |

