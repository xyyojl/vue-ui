<template>
  <div>
    <g-row gutter="10" class="demoRow">
        <g-col span="8"><div>8</div> </g-col>
        <g-col span="8"><div>8</div></g-col>
        <g-col span="8"><div>8</div></g-col>
    </g-row>
    <g-row class="demoRow">
        <g-col span="1" > 1</g-col>
        <g-col span="22" offset="1">2</g-col>
    </g-row>
  </div>
</template>
<script>
  import Row from '../../../src/row'
  import Col from '../../../src/col'
  export default {
    components: {
      'g-row': Row,
      'g-col': Col
    }
  }
</script>
<style scoped>
  * {
      box-sizing: border-box;
  }
  .demoRow{
      margin: 10px 0;
  }
  .col{
    height: 36px;
    border: 1px solid #ccc;
    background: #d3dce6;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
