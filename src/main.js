import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/style/index.css'
import '@/assets/style/index.css'
import Router from '@/router/index'
import apis from "@/axios/apis";

const app = createApp(App)

app.config.globalProperties.$apis = apis

app.use(ElementUI)
app.use(Router)

app.mount('#app')
