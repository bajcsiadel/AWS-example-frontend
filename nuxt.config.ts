
import Aura from '@primeuix/themes/aura';
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    "@formkit/auto-animate/nuxt",
    "@primevue/nuxt-module",
  ],
  app: {
    head: {
      title: "AWS exercise",
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.webp' }
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/092629ea56.js",
          crossorigin: "anonymous"
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      API_URL: `${process.env.API_HOST}:${process.env.API_PORT}`
    }
  },
  css: ['@/assets/css/main.css'],
  primevue: {
    components: {
      prefix: "Prime"
    },
    directives: {
      prefix: "Prime"
    },
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: "dark-theme"
        }
      },
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
