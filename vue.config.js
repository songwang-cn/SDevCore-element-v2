module.exports = {
    // 代理接口配置
    devServer: {
        port: 8400, // 端口号
        host: "0.0.0.0",
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        proxy: {
            [process.env.VUE_APP_ROOT]: {
                target: process.env.VUE_APP_API_URL, // 通过本地服务器将你的请求转发到这个地址
                changeOrigin: true,
                pathRewrite: {
                    [process.env.VUE_APP_ROOT]: ""
                }
            }
        }
    }
}
