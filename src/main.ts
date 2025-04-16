import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n' // Import the i18n instance

createApp(App)
  .use(i18n) // Use the i18n instance
  .mount('#app')
