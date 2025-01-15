import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "首页",
    component: () => import("@/views/userList/index"),
    meta: { title: "首页" },
  },
  {
    path: "/dashboard",
    name: "看板",
    component: () => import("@/views/dashboard/index"),
    meta: { title: "看板" },
  },
];

const router = new VueRouter({
  mode: "history",
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
