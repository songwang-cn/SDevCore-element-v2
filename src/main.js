import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import SC from "@/package/index";
import "@/package/assets/style/index.css";

Vue.use(ElementUI, {
  size: "mini",
});

Vue.use(SC);

/**
 * 支持传入主题色配置, 必须为 16进制 颜色值
 */
// Vue.use(SC, '#f39800');

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
