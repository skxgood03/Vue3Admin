import { createApp } from "vue";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from "./App.vue";
// 引入全局样式
// 引入SVG图标库
import 'virtual:svg-icons-register'

// 引入自定义插件对象：注册整个项目的所有全局组件
import gloablComponent from '@/components/index';
import '@/styles/index.scss'
// 引入路由

import router from "./router/index";
const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn
})

app.use(gloablComponent);
// 注册路由
app.use(router)



app.mount("#app");