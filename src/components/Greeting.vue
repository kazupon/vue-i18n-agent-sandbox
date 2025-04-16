<template>
      <h1>{{ t('hello') }}</h1>
    </template>

    <script setup lang="ts">
    import { useI18n } from 'vue-i18n'

    // Use useI18n within the component to access translations defined in the <i18n> block
    const { t } = useI18n({
      useScope: 'local' // Important: ensures component uses its own <i18n> block
    })
    </script>

    <i18n lang="json">
    {
      "en": {
        "hello": "Hello Vue 3 + TypeScript + Vite + i18n Custom Block!"
      },
      "ja": {
        "hello": "こんにちは Vue 3 + TypeScript + Vite + i18n カスタムブロック!"
      }
    }
    </i18n>
