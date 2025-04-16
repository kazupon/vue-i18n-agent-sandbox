import eslintPluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import vueI18nPlugin from '@intlify/eslint-plugin-vue-i18n';

export default tseslint.config(
  // Global ignores configuration FIRST
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '*.config.js',
      '*.config.ts',
      '*.mjs' // Add other config extensions if needed
    ]
  },
  // Base ESLint recommended rules
  {
    rules: {
      // Add or override base rules here if needed
    }
  },

  // TypeScript configuration
  ...tseslint.configs.recommended,

  // Vue 3 configuration
  ...eslintPluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        sourceType: 'module',
      },
    },
    rules: {
      // Add or override Vue specific rules here
      'vue/multi-word-component-names': 'off', // Often useful to turn off for simple examples/apps
    }
  },

  // Vue I18n configuration
  {
    plugins: {
      '@intlify/vue-i18n': vueI18nPlugin,
    },
    // Settings for vue-i18n plugin
    settings: {
      'vue-i18n': {
        // Define the path to the locale directory
        localeDir: './src/locales/*.json',
        // Define the target attribute for vue-i18n tags
        // Specify 'base' if using <i18n> component scope, 'fluent' if using <i18n-t>, etc.
        // attribute: 'base'
      }
    },
    rules: {
      // Basic rules
      ...vueI18nPlugin.configs.base.rules,
      // Settings related to Vue components
      ...vueI18nPlugin.configs.recommended.rules,
      // Optional: Enable strict rules for locale message syntax (e.g., ICU) if needed
      // ...vueI18nPlugin.configs['strict-message-syntax'].rules,

      // Define the path to your locale messages directory
      // Adjust the path according to your project structure
      // This rule now reads from settings.vue-i18n.localeDir
      '@intlify/vue-i18n/no-missing-keys': 'error',
      '@intlify/vue-i18n/no-unused-keys': ['warn', {
        src: './src', // Adjust if your source files are elsewhere
        extensions: ['.js', '.vue', '.ts']
      }],
      // You can add more vue-i18n rules as needed
      // e.g., '@intlify/vue-i18n/no-raw-text': 'warn'
    }
  },

  // General project settings
  {
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
        node: true
      }
    }
    // Ignores moved to the beginning
  }
);
