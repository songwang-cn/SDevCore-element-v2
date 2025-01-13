import axios from "./index";

const base_url = process.env.VUE_APP_ROOT

export const get = path  => {
    return (params) => {
        return axios.get(`${base_url}${path}`, params).then(res => res).catch(e => e)
    }
}
export const post = path => {
    return (params) => {
        return axios.post(`${base_url}${path}`, params).then(res => res).catch(e => e)
    }
}

export default { get, post }
