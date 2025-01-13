import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import router from '../router'
import BaseUrl from "../config";

// create an axios instance
const service = axios.create({
    baseURL: BaseUrl.ROOT, // url = base url + request url
    timeout: 5000 // request timeout
});

// 请求拦截
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['token'] = store.getters.token;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
);

// 响应拦截
service.interceptors.response.use(
    response => {
        if (response.headers['content-type'] === "image/png") {
            return {
                vouchers: response.headers.vouchers,
                data: response.data
            };
        }
        const res = response.data;
        if (res.code !== 200) {
            // 失败提示
            Vue.prototype.$message(res.msg ? res.msg : '操作失败.');
            if (res.code == 419) {
                store.commit('user/logout');
            }
            return res;
        } else {
            return res;
        }
    },
    error => {
        Vue.prototype.$message("服务器繁忙，请稍后再试");
        return Promise.reject(error)
    }
);

export default service