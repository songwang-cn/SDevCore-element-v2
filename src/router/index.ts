import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/index.vue'),
        meta: {
            title: '首页',
            icon: 'icon-shouye-zhihui'
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router



