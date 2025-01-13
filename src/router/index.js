import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)


const routes = [
{
  path: '/',
  component: Layout,
  children: [
  {
    name: '首页',
    path: '',
    component: () => import('@/views/Home'),
    meta: { title: '首页' }
  },
  {
    name: "应急维护",
    path: 'repair/urgency',
    component: () => import('@/views/urgency/index.vue'),
    meta: { title: '应急维护' }
  },
  {
    name: "其他维护",
    path: 'repair/other',
    component: () => import('@/views/urgency'),
    meta: { title: '其他维护' }
  }]
}, ]

const router = new VueRouter({
  mode: 'history',
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router