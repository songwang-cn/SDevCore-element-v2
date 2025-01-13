import Vue from 'vue';
const state = {};
const mutations = {
    SET_LOADING: (state, data) => {
        const isObject =
            Object.prototype.toString.call(data) === '[object Object]';
        if (!isObject) return;
        Object.keys(data).forEach(key => {
            Vue.set(state, key, data[key]);
        });
    },
    CANCAL_LOADING: state => {
        Object.keys(state).forEach(key => {
            Vue.delete(state, key);
        });
    }
};
const actions = {
    SetLoading({ commit }, data) {
        commit('SET_LOADING', data);
    },
    CancalLoading({ commit }, data) {
        commit('CANCAL_LOADING', data);
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
};


