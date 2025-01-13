// 引进config.js
const path = require('path')
const BaseUrl = require("./src/config.js");
const resolve = dir => {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: config => { // 配置路径别名
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('src/components'))
            .set('_svg', resolve('src/assets/svg'))
            .set('_img', resolve('src/assets/img'))
    },
    productionSourceMap: false,
    publicPath:'/',
    // publicPath:'./',
    // 代理接口配置
    devServer: {
        // port: 8080, // 端口号
        host: "",
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        proxy: {
            [BaseUrl.ROOT]: {
                target: BaseUrl.URL, // 通过本地服务器将你的请求转发到这个地址
                changeOrigin: true, 
                pathRewrite: {
                    [`^${BaseUrl.ROOT}`]: ""
                }
            }
        }
    }
};