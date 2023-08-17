import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import { createRouter, createWebHistory } from 'vue-router'

let instance: any = null;
let router: any = null;
function render(props: any) {
    if (window.__POWERED_BY_QIANKUN__) {
        const { container, loadedApplicationMap }: any = props;
        let vnodeInstance: any = null
        if (loadedApplicationMap.has(props.name)) {
            vnodeInstance = loadedApplicationMap.get(props.name)
        }
        if (vnodeInstance) {
            console.log(vnodeInstance)
            vnodeInstance.mount(container.querySelector('#app'))
        } else {
            router = createRouter({
                history: createWebHistory(props.activeRule),
                routes
            })
            instance = createApp(App)
            instance.use(store).use(router).mount(container.querySelector('#app'))
            vnodeInstance = instance
            loadedApplicationMap.set(props.name, vnodeInstance)
        }
    } else {
        router = createRouter({
            history: createWebHistory(process.env.BASE_URL),
            routes
        })
        instance = createApp(App).use(store).use(router)
        instance.mount('#app')
    }
}

if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
  
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}
export async function mount(props: IContainer) {
    console.log('[vue] props from main framework', props);
    render(props);
}
export async function unmount() {
    instance.unmount();
    // instance = null;
    // delete instance.config.globalProperties
    // router = null;
}