import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['vue', 'vue-router'],
    },
    experimental: {
      enableNativePlugin: true,
    },
  },

  modules: ['@nuxt/eslint', '@nuxt/ui'],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  devtools: {
    enabled: true,
  },

  $development: {
    app: {
      head: {
        title: '[Development] @xcvzmoon/xcvz-template',
      },
    },
  },

  $production: {
    app: {
      head: {
        title: '@xcvzmoon/xcvz-template',
      },
    },
  },
});
