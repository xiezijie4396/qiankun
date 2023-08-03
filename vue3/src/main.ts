import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let instance: any = null;
function render(props: IContainer = {} as IContainer) {
    const container: any = props.container;
    instance = createApp(App).use(store).use(router)
    instance.mount(container ? container.querySelector('#app') : '#app')
}

if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
  
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
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
    instance = null;
}