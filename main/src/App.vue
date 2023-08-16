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
    <div id="container-vue2" v-show="$route.path.includes('/vue2/')"></div>
    <div id="container-vue3" v-show="$route.path.includes('/vue3/')"></div>
  </div>
</template>

<script>
import { loadMicroApp } from 'qiankun';

const apps = [
  {
    name: 'vue2', // app name registered
    entry: '//localhost:8001/child/vue2/',
    container: '#container-vue2',
    props: {
      activeRule: '/main/vue2'
    }
  },
  {
    name: 'vue3', // app name registered
    entry: '//localhost:8002/child/vue3/',
    container: '#container-vue3',
    props: {
      activeRule: '/main/vue3'
    }
  },
]

export default {
  mounted() {
    // 优先加载当前的子项目
    const path = this.$route.path;
    const currentAppIndex = apps.findIndex(item => path.includes(item.name));
    if(currentAppIndex !== -1){
      const currApp = apps.splice(currentAppIndex, 1)[0];
      apps.unshift(currApp);
    }
    // loadMicroApp 返回值是 app 的生命周期函数数组
    const loadApps = apps.map(item => loadMicroApp(item))
    // 当 tab 页关闭时，调用 loadApps 中 app 的 unmount 函数即可
    console.log(loadApps)
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
