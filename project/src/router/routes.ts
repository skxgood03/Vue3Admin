// 常量路由
export const constantRoutes = [
    {
        path: "/login",
        component: () => import('@/views/login/index.vue'),
        name: "login", //路由命名
        meta: {
            title: '登录',
            hidder: true
        }
    },
    {
        path: "/404",
        component: () => import('@/views/404/index.vue'),
        name: "404", //路由命名
        meta: {
            title: '404',
            hidder: true
        }
    },
    {
        path: "/",
        component: () => import('@/layout/index.vue'),
        name: "layout", //路由命名
        meta: {
            title: 'layout',
            hidder: true
        },
        children: [
            {
                path: "/sy",
                component: () => import('@/views/home/index.vue'),
                name: "首页", //路由命名
                meta: {
                    title: '首页',
                    hidder: false
                }
            }
        ]
    },
    // 任意路由(所有路由没匹配到走这个)
    {
        path: "/:pathMatch(.*)*",
        component: () => import('@/views/404/index.vue'),
        name: "Any", //路由命名
        meta: {
            title: 'Any',
            hidder: false
        }
    },
]