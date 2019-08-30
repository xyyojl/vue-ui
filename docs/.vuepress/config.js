module.exports = {
    base: '/vue-ui/',
    title: 'Gaiety UI',
    description: '一个基于 Vue 2 的 UI 框架',
    themeConfig: {
        sidebar: [
            '/',
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/tabs',
                    '/components/popover',
                    '/components/collpase',
                ]
            },
        ],
    }
}