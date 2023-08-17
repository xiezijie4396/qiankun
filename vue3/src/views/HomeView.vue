<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="changeCount">vue3 count is {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    changeCount() {
      this.count++
    }
  }
});
</script>
