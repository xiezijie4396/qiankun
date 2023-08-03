<template>
  <div id="app">
    这里是主体哦
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/vue2">vue2</router-link> |
      <router-link to="/vue3">vue3</router-link> |
      <router-link to="/react">react</router-link>
    </nav>
    <router-view/>
    <div id="vue2"></div>
    <div id="vue3"></div>
    <div id="react"></div>
  </div>
</template>

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
