const path = require("path");
const resolve = (dir) => {
  return path.join(__dirname, dir);
};
module.exports = {
  chainWebpack: (config) => {
    // 配置路径别名
    config.resolve.alias.set("@", resolve("src"));
  },
  productionSourceMap: false,
  publicPath: "/",
  //热更新
  devServer: {
    hot: true,
    port: 8899,
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": "",
    //     },
    //   },
    // },
  },
};
