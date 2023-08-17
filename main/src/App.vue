<template>
  <div id="app">
    这里是主体哦
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/vue2">vue2</router-link> |
      <router-link to="/vue3/">vue3</router-link> |
      <!-- <router-link to="/react/">react</router-link> |
      <router-link to="/default/">default</router-link> |
      <router-link to="/vue2hash/">vue2hash</router-link> |
      <router-link to="/vue3hash/">vue3hash</router-link> -->
    </nav>
    <router-view />
    <div id="container-vue2" v-show="$route.path.includes('/vue2')"></div>
    <div id="container-vue3" v-show="$route.path.includes('/vue3')"></div>
  </div>
</template>

<script>
import { registerMicroApps, start } from 'qiankun';
import getRegisterApp from './register'

const loadedApplicationMap = new Map()

export default {
  mounted() {
    const isDev = !(process.env.NODE_ENV === 'production')
    const registerArr = getRegisterApp().map(item => {
      item.props.loadedApplicationMap = loadedApplicationMap
      return item
    })
    registerMicroApps(registerArr)

    start({
      // 本地开发时，禁用预加载，防止因其他项目未启动而导致的报错
      prefetch: isDev ? false : true,
      // prefetch: false,
      sandbox: {
        experimentalStyleIsolation: true
      }
    })

  }
}

</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
