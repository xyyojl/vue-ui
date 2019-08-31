<template>
  <div>
    <g-input value="默认状态"></g-input>
    <g-input value="禁用状态" disabled></g-input>
    <g-input value="只读状态" readonly></g-input>
    <g-input value="123" error="请重新输入手机号码"></g-input>
  </div>
</template>
<script>
  import Input from '../../../src/input'
  export default {
    components: {
      'g-input': Input
    }
  }
</script>
<style>
    .wrapper{
        margin: 4px;
    }
</style>