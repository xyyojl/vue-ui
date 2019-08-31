<template>
  <div class="box">
    <g-collapse :selected="['one','two','three']">
      <g-collapse-item title="标题1" name="one">内容文字1</g-collapse-item>
      <g-collapse-item title="标题2" name="two">内容文字2</g-collapse-item>
      <g-collapse-item title="标题3" name="three">内容文字3</g-collapse-item>
    </g-collapse>
  </div>
</template>
<script>
import Collapse from "../../../src/collapse";
import CollapseItem from "../../../src/collapse-item";
export default {
  components: {
    "g-collapse": Collapse,
    "g-collapse-item": CollapseItem
  }
};
</script>