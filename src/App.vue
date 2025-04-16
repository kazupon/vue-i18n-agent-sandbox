<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Greeting from './components/Greeting.vue' // Import the Greeting component
import BananaCounter from './components/BananaCounter.vue' // Import the BananaCounter component

// Keep locale for the switcher, remove t as it's handled by Greeting
const { locale } = useI18n()
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <!-- Removed Vue logo link as the asset was deleted -->
  </div>
  <Greeting /> <!-- Use the Greeting component -->
  <hr style="margin: 2em 0;" />
  <BananaCounter /> <!-- Use the BananaCounter component -->

  <!-- Language switcher -->
  <form>
    <label for="locale-select">Language: </label>
    <select id="locale-select" v-model="locale">
      <option value="en">English</option>
      <option value="ja">日本語</option>
      <option value="ru">Русский</option> <!-- Add Russian option -->
    </select>
  </form>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
/* Removed .logo.vue:hover styles as the element was deleted */
</style>
