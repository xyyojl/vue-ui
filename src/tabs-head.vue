<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GuluTabsHead',
    inject: ['eventBus'],
    created(){
        // 验证事件要看在哪个对象上触发，只能对那个对象监听
        this.$emit('update:selected', 'tabs-head 抛出的数据')
    }    
}
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    .tabs-head{
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        // 有点问题
        align-items: center;
        border: 1px solid red;
        > .actions-wrapper{
            margin-left: auto;
        }
    }
</style>
