import {createWebHistory, createRouter} from 'vue-router'
import {defineAsyncComponent } from 'vue'

const routes = [
    {
        path: '/',
        component: defineAsyncComponent(() => import('@/views/MyPage'))
    },
    {
        name: '详情',
        path: '/teamInfo',
        component: () => require('@/views/teamInfo')
    },
    {
        name: 'air',
        path: '/air',
        component: () => require('@/views/air')
    }
]

const router = new createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
