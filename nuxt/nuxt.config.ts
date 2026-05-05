// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  alias: {
    'img': resolve(__dirname, './assets/img'),
  },

  runtimeConfig: {

    apiSecret: process.env.NUXT_API_SECRET || 'default-secret',

    dev: {
      apiBase: process.env.NUXT_DEV_API_BASE || 'http://localhost:8000',
    },

    prod: {
      apiBase: process.env.NUXT_PROD_API_BASE || 'http://localhost:8000',
    },

    public: {
      apiBase: process.env.API_BASE || 'http://localhost:8000',
    },

  },

  modules: ["@nuxtjs/tailwindcss"],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

})