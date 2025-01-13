import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import { formatDate } from '@/utils/formatDate'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/init.css';
import '@/assets/icon/iconfont.css';
import '@/assets/css/admin.css';
import '@/assets/css/elementRewrite.css';
import '@/assets/css/global.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;
// 全局方法
Vue.prototype.formatDate = formatDate


// console.log(store);
/**
 * 初始化vueX
 */
// function initVuex() {
//   /**
//    * @param {string} key
//    * @param {boolean} isObj
//    * @param {string|object} initData
//    * @param {boolean} isLocal
//    */
//   function getLocal(key, isObj = true, initData = '', isLocal = true) {
//     let data = '';
//     if (isLocal) {
//       data = localStorage.getItem(key);
//     } else {
//       data = sessionStorage.getItem(key);
//     }
//     let ret;
//     if (isObj) {
//       if (data) {
//         try {
//           ret = JSON.parse(data);
//         } catch (e) {
//           ret = initData ? initData : {};
//         }
//       } else {
//         ret = initData ? initData : {};
//       }
//     } else {
//       ret = data ? data : (initData ? initData : '');
//     }
//     return ret;
//   }

//   let user = getLocal('user', true, {
//     nickName: "默认用户",
//     avatar: "",
//     token: "",
//   })
//   let token = getLocal('token', false);
//   store.commit(`user/setUser`, user); // 设置用户信息
//   store.commit('user/setToken', token); // 设置token
// };

// initVuex();

// // 路由守卫
// router.beforeEach((to, from, next) => {
//   document.title = to.meta ? (to.meta.title ? to.meta.title : '天蛙差评处理') : '天蛙差评处理';
//   if (to.meta && to.meta.noCache) {
//     bus.$emit('refresh');
//   }
//   if ((to.path !== '/login' && to.path !== '/sign_up' && to.path !== '/register_success') && !store.getters.token) {
//     store.state.sys.fromPath = to.path;
//     next({ path: '/login' })
//   } else if ((to.path === '/login' || to.path === '/sign_up' || to.path === '/register_success') && store.getters.token) {
//     next({ path: from.path ? from.path : '/' });
//   } else {
//     // ViewUI.LoadingBar.start(); // 虚拟加载进度
//     next();
//   }
// });

// router.afterEach(route => {
//   // if (!route.meta.notAutoLoadingBar) {
//   //     ViewUI.LoadingBar.finish(); // 虚拟加载进度
//   // }
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')