import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import SC from "@/package/index";

Vue.use(ElementUI, {
  size: "mini",
});

Vue.use(SC);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
