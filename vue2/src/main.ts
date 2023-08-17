import Vue from 'vue';
import App from './App.vue';
import routes from './router';
import store from './store';
import VueRouter from 'vue-router'

Vue.config.productionTip = false;

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

let instance: any = null;
let router: any = null;
function render(props: any) {
  if (window.__POWERED_BY_QIANKUN__) { // 作为子应用使用
    const { container, loadedApplicationMap }: any = props;
    let vnodeInstance: any = null
    if (loadedApplicationMap.has(props.name)) {
      vnodeInstance = loadedApplicationMap.get(props.name)
    }
    router = new VueRouter({
      mode: 'history',
      base: props.activeRule,
      routes
    })
    instance = new Vue({
      router,
      store,
      render: vnodeInstance ? () => vnodeInstance._vnode : (h) => h(App),
    }).$mount(container.querySelector('#app'));
    vnodeInstance = instance
    vnodeInstance._vnode.data.keepAlive = true
    loadedApplicationMap.set(props.name, vnodeInstance)
  } else { // 独立使用
    router = new VueRouter({
      mode: 'history',
      base: process.env.BASE_URL,
      routes
    })
    instance = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
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
  // instance.$destroy();
  // instance.$el.innerHTML = '';
  // instance = null;
  router = null;
}