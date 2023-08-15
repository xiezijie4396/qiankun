import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import { createRouter, createWebHashHistory } from 'vue-router'

let instance;
let router;
function render(props) {
    const container = props.container;
    router = createRouter({
        history: createWebHashHistory(window.__POWERED_BY_QIANKUN__ ? props.activeRule : process.env.BASE_URL),
        routes
    })
    instance = createApp(App).use(store).use(router)
    instance.mount(container ? container.querySelector('#app') : '#app')
}

if (window.__POWERED_BY_QIANKUN__) {
    /* eslint-disable */
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
  
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
    console.log('[vue] props from main framework', props);
    render(props);
}
export async function unmount() {
    instance.unmount();
    instance = null;
}