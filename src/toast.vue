<template>
    <div class="toast" ref="wrapper">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span v-if="closeButton" class="close" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>
<script>
//构造组件的选项

export default {
    name:'GuluToast',
    props:{
        autoClose:{
            type: Boolean,
            default: true
        },
        autoCloseDelay:{
            type: Number,
            default: 5
        },
        closeButton:{
            type: Object,
            default:()=>{
                return {
                    text: '关闭',
                    callback:undefined
                }
            }
        },
        enableHtml:{
            type: Boolean,
            default: false
        }
    },
    mounted(){
        if(this.autoClose){
           setTimeout(()=>{
               this.close();
           },this.autoCloseDelay * 1000) 
        }
        this.$nextTick(()=>{
            this.$refs.line.style.height = 
            `${this.$refs.wrapper.getBoundingClientRect().height}px`
        })
    },
    methods:{
       close(){
           this.$el.remove();
           this.$destroy()
       },
       onClickClose(){
           this.close();
           if(this.closeButton && typeof this.closeButton === 'function'){
                this.closeButton.callback();//this === toast实例
           }
       }
    }

}
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0,0,0,.75);
    .toast{
        font-size: $font-size;
        line-height: 1.8;
        min-height: $toast-min-height;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
        color: #fff;
        padding: 0 16px;
        .message{
            padding: 8px 0;
        }
        .close{
            margin-left: 16px;
            flex-shrink: 0;
        }
        .line{
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 16px;
        }
    }
    
</style>
