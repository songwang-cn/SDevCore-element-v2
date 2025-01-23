import Router from "vue-router";
import Vue from "vue";

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

function addAsyncRoute(menuList) {
  menuList.forEach((menu) => {
    if (menu.children && menu.children.length) {
      addAsyncRoute(menu.children);
    } else {
      router.addRoute("main", {
        path: menu.path,
        name: menu.name,
        component: () => import(`@/views/${menu.component}.vue`),
      });
    }
  });
}
function initAsyncRoute(menuList) {
  localStorage.setItem("menuTree", JSON.stringify(menuList));
  addAsyncRoute(menuList);
}

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
    initAsyncRoute(asyncMenuTree);
    next(to);
  }
});

export default router;
