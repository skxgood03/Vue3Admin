import SvgIcon from '@/components/SvgIcon/index.vue';
import type { App, Component } from 'vue';
const components: { [name: string]: Component } = { SvgIcon };
export default {
    install(app: App) {
        // Object.keys可以拿到所有的key成数组，然后用foreach遍历注册为全局组件
        Object.keys(components).forEach((key: string) => {
            // 注册全局组件
            app.component(key, components[key]);
        })
    }
}