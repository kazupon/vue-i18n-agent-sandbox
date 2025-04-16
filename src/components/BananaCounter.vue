<template>
  <div>
    <h2>{{ $t('bananaCounterTitle') }}</h2>
    <label for="banana-count">{{ $t('bananaLabel') }} </label>
    <input
      id="banana-count"
      type="number"
      v-model.number="bananaCount"
      min="1"
      style="margin-left: 8px; width: 60px;"
    />
    <!-- Display message with pluralization -->
    <p style="margin-top: 16px;">
      {{ $t('bananaInfo', { count: bananaCount }) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Reactive variable to hold the number of bananas
const bananaCount = ref(1) // Default to 1 banana
</script>

<style scoped>
/* Add component-specific styles if needed */
label {
  font-weight: bold;
}
</style>
