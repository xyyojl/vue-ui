import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import buttonGroup from './button-group'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', buttonGroup);
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
    }
})

import chai from 'chai';
import spies from 'chai-spies';

chai.use(spies);

const expect = chai.expect;

try {
    // 单元测试
    {
        // 测试按钮含有 icon
        // 动态生成一个按钮 通过js写在页面
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        });
        // 把vm挂载到内存里
        vm.$mount();
        let useElement = vm.$el.querySelector('use');
        let href = useElement.getAttribute('xlink:href');
        expect(href).to.eq('#i-settings');
        vm.$el.remove();
        vm.$destroy();
        // 如果我的设置与我的检查结果满足我的预期，代码没问题
    }
    {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        });
        vm.$mount();
        let useElement = vm.$el.querySelector('use');
        let href = useElement.getAttribute('xlink:href');
        expect(href).to.eq('#i-loading');
        vm.$el.remove();
        vm.$destroy();
    }
    {
        let div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        });
        vm.$mount(div);
        let svg = vm.$el.querySelector('svg');
        // let order = window.getComputedStyle('svg').order;
        let { order } = window.getComputedStyle(svg);
        expect(order).to.eq('1');
        vm.$el.remove();
        vm.$destroy();
    }
    {
        let div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        });
        vm.$mount(div);
        let svg = vm.$el.querySelector('svg');
        let { order } = window.getComputedStyle(svg);
        expect(order).to.eq('2');
        vm.$el.remove();
        vm.$destroy();
    }

    {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        });
        vm.$mount();
        const spy = chai.spy(function () { })
        vm.$on('click', spy);
        // 希望这个函数被执行
        let button = vm.$el;
        button.click();
        expect(spy).to.have.been.called();
    }
}catch(error){
    window.errors = [error]
}finally{
    window.errors.forEach((error) => {
        console.error(error.message);
    });
}
