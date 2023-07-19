<script setup>
import { ref, computed } from 'vue';
import { RouterView } from 'vue-router';
import {useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: 'html',
});
const toggleDark = useToggle(isDark);

</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__text">
        <span>#i7q</span>
      </div>
      <!-- <div class="header__toogle">
        <p>Dark theme: {{ IsDark }}</p>
          <button @click="toggleDark()">
            Switch
          </button>
      </div> -->
    </div>
  </header>

  <main class="main">
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/light.sass"
// .dark
//   @import "@/assets/styles/dark.sass"
</style>
