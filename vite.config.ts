import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url' // Import URL utilities for path resolution
// Removed unused path import
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite' // Import the plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      /* options */
      // Enable vue-i18n custom block compilation
      // If you use the `<i18n>` block for translations, set `runtimeOnly` to false.
      // Otherwise (e.g., using external JSON/YAML files), set it to true for better performance.
      runtimeOnly: false, 

      // If using custom blocks (`<i18n>`), you might not need 'include'.
      // If loading external files (JSON/YAML), specify the path.
      // Example for external files (adjust if needed):
      // include: path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
    }),
  ],
  resolve: { // Add resolve alias if needed, or remove if not using aliases
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
