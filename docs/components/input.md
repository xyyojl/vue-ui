---
title: Input - 输入框
---
# 输入框

## 需求演示

- 默认状态
- 禁用状态
- 只读状态
- 警示状态
- 绑定事件(change input focus blur)

<ClientOnly>
  <input-demos></input-demos>
</ClientOnly>

``` html
<g-input value="默认状态"></g-input>
<g-input value="禁用状态" disabled></g-input>
<g-input value="只读状态" readonly></g-input>
<g-input value="123" error="请重新输入手机号码"></g-input>
```
## Attributes

| 参数     | 说明             | 类型    | 可选值 | 默认值 |
| -------- | ---------------- | ------- | ------ | ------ |
| value    | 输入框显示的信息 | String  | ——     | ——     |
| disabled | 禁用状态         | Boolean | ——     | false  |
| readonly | 只读状态         | Boolean | ——     | false  |
| error    | 错误信息         | String  | ——     | ——     |


