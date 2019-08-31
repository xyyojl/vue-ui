<template>
  <div>
    <g-button @click="showToast1">顶部浮层</g-button>
    <g-button @click="showToast2">中部浮层</g-button>
    <g-button @click="showToast3">底部浮层</g-button>
  </div>
</template>
<script>
import Vue from 'vue'
import Button from "../../../src/button";
import plugin from "../../../src/plugin";
Vue.use(plugin);
export default {
  components: {
    "g-button": Button
  },
  methods: {
    showToast1() {
      this.showToast("top");
    },
    showToast2() {
      this.showToast("middle");
    },
    showToast3() {
      this.showToast("bottom");
    },
    showToast(position) {
      this.$toast("<p>我是 message</p>", {
        closeButton: {
          text: "关掉我",
          callback() {
            console.log("关掉我了");
          }
        },
        autoClose: 5,
        enableHTML: true,
        position
      });
    }
  }
};
</script>