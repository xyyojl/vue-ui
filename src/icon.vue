<template>
<!-- g-icon 防止这个icon与其他冲突 -->
    <svg class="g-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
import './svg'
export default {
    name:'GuluIcon',
    props:['name']
}
</script>
<style lang="scss" scoped>
    .g-icon{
        width: 1em;
        height: 1em;
    }
</style>


