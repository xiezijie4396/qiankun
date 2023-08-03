import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'vue2 app', // app name registered
    entry: '//localhost:8001',
    container: '#vue2',
    activeRule: '/vue2',
  },
  {
    name: 'vue3 app', // app name registered
    entry: '//localhost:8002',
    container: '#vue3',
    activeRule: '/vue3',
  },
  {
    name: 'react app', // app name registered
    entry: '//localhost:8003',
    container: '#react',
    activeRule: '/react',
  }
])

Vue.config.productionTip = false

start()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
