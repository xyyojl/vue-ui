<template>
  <div>
    <g-button>按钮</g-button>
    <g-button icon="settings">按钮</g-button>
    <g-button :loading="true">按钮</g-button>
    <g-button disabled>默认按钮</g-button>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>

    <!-- <pre>
    <code>{{content}}</code>
    </pre> -->
  </div>
</template>
<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'
  export default {
    components: {
      'g-button': Button,
      'g-button-group':ButtonGroup
    },
    data () {
      return {
        /* content: `
        <g-button>按钮</g-button>
        <g-button icon="settings">按钮</g-button>
        <g-button :loading="true">按钮</g-button>
        <g-button disabled>默认按钮</g-button>
        <g-button-group>
          <g-button icon="left">上一页</g-button>
          <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>
      ` */
      }
    }
  }
</script> 