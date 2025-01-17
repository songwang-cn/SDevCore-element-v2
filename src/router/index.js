import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/body/main.vue"),
    children: [
      {
        icon: "el-icon-s-tools",
        name: "用户列表",
        path: "/",
        component: () => import("@/views/user/index.vue"),
      },
      {
        path: ":catchAll(.*)",
        component: () => import("../404.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  env: process.env.NODE_ENV,
  routes,
});

export default router;
