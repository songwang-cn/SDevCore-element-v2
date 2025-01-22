import router from "@/router";

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

export class MenuHelper {
  static async initAsyncRoute(menuList) {
    localStorage.setItem("menuTree", JSON.stringify(menuList));
    addAsyncRoute(menuList);
  }
}
