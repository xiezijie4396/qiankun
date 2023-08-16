import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { registerMicroApps, start } from 'qiankun';
// import getRegisterApp from './register'
// const isDev = !(process.env.NODE_ENV === 'production')

// const registerArr = getRegisterApp()
// registerMicroApps(registerArr)

// Vue.config.productionTip = false

// start({
//   // 本地开发时，禁用预加载，防止因其他项目未启动而导致的报错
//   prefetch: isDev ? false : true,
//   // prefetch: false,
//   sandbox: {
//     experimentalStyleIsolation: true
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
