import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-08-08',

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

  modules: ['@nuxt/eslint', '@nuxt/ui', '@vueuse/nuxt'],

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
