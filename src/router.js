const routers = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/list',
        meta: {
            title: '列表页'
        },
        component: (resolve) => require(['./views/list.vue'], resolve)
    }
];
export default routers;