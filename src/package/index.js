/**
 * @description 引入所有组件
 */
const requireComponent = require.context("./component", true, /\.vue$/);

/**
 * @description 引入所有工具类
 */
const requireHelpers = require.context("./helper", true, /\.js$/);

const install = function(Vue) {
  if (install.installed) return;
  install.installed;
  /**
   * components
   * 批量注册组件
   */
  requireComponent.keys().forEach((element) => {
    const config = requireComponent(element);
    const componentName = config.default.name;
    Vue.component(componentName, config.default || config);
  });
  /**
   * Helpers
   * 批量动态挂载全局工具类
   */
  requireHelpers.keys().forEach((module) => {
    const helperModule = requireHelpers(module);
    const helperClassName = Object.keys(helperModule)[0];
    Vue.prototype[`$${helperClassName}`] = helperModule[helperClassName];
  });
};

// 环境监测 确保是vue环境
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
