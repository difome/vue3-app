<template>
  <div :class="theme">
    <button @click="toggleTheme">
      <span v-if="theme === 'dark'">Dark</span>
      <span v-else>Light</span>
    </button>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const theme = ref(localStorage.getItem('theme') || 'light');

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', theme.value);
};
</script>

<style lang="sass" scoped>
@import "@/assets/styles/dark.sass"

.dark
  @import "@/assets/styles/dark.sass"

</style>
