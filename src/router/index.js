import Router from "vue-router";
import Vue from "vue";
import { MenuHelper } from "../package/helper/MenuHelper";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/body/main.vue"),
    children: [],
  },
];

const router = new Router({
  base: "/",
  routes,
  mode: "history",
  env: process.env.NODE_ENV,
});

router.beforeEach((to, from, next) => {
  if (router.getRoutes().some((item) => item.name === to.name)) {
    next();
  } else {
    const asyncMenuTree = [
      {
        icon: "el-icon-s-tools",
        name: "用户管理",
        children: [
          {
            name: "用户列表",
            path: "/user",
            component: "user/index",
          },
        ],
      },
      {
        icon: "el-icon-s-tools",
        name: "设备列表",
        path: "/device",
        component: "device/index",
      },
      {
        icon: "el-icon-s-tools",
        name: "大屏",
        path: "/dashboard",
        component: "dashboard/index",
      },
    ];
    MenuHelper.initAsyncRoute(asyncMenuTree);
    next(to);
  }
});

export default router;
