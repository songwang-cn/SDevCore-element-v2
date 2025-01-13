import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
// 引入所有modules目录下和子目录下js
const modulesFiles = require.context('./modules', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    // set './app.js' => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    // console.log(modules);
    return modules
}, {});

const store = new Vuex.Store({
    modules,
    getters
});

export default store
