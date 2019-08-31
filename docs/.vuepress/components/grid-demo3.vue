<template>
  <div>
    <g-row class="demoRow">
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
    <g-row class="demoRow">
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
  </div>
</template>
<script>
import Row from "../../../src/row";
import Col from "../../../src/col";
export default {
  components: {
    "g-row": Row,
    "g-col": Col
  }
};
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