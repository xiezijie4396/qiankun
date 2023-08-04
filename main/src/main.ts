import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun';
import getRegisterApp from './register'

console.log(getRegisterApp())
registerMicroApps((getRegisterApp()))

Vue.config.productionTip = false

start()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
