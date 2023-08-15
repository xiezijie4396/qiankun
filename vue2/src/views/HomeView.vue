<template>
  <div class="home">
    <div>这里是Vue2，此时count：{{ count }}</div>
    <button @click="add">点击这里新增count</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomeView',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count++
    }
  }
});
</script>
