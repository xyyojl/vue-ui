<template>
    <button class="g-button">
        <svg class="icon" v-if="icon">
            <!-- 让属性是动态的 模板字符串 -->
            <!-- 最终效果 <use xlink:href="#i-settings"></use> -->
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <slot></slot>    
    </button>
</template>
<script>
    export default {
        props:['icon','iconPosition'] // left right
    }
</script>
<style lang="scss">
    .g-button{
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }
    }

</style>