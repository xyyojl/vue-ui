<template>
  <div class="box">
    <g-popover trigger="click">
      <template slot="content">
        <div>click 触发</div>
      </template>
      <g-button>click 触发</g-button>
    </g-popover>
    <g-popover trigger="hover">
      <template slot="content">
        <div>hover 触发</div>
      </template>
      <g-button>hover 触发</g-button>
    </g-popover>
  </div>
</template>
<script>
import Popover from "../../../src/popover";
import Button from "../../../src/button";
export default {
  components: {
    "g-popover": Popover,
    "g-button": Button
  }
};
</script>
