// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  alias: {
    'img': resolve(__dirname, './assets/img'),
  },

  runtimeConfig: {

    apiSecret: process.env.NUXT_API_SECRET || 'default-secret',

    dev: {
      apiBase: process.env.NUXT_DEV_API_BASE,
    },

    prod: {
      apiBase: process.env.NUXT_PROD_API_BASE,
    },

    public: {
      apiBase: process.env.API_BASE,
    },

  },

  modules: [
    "@nuxt/ui",
    '@nuxtjs/color-mode',
    '@nuxt/icon',
  ],
  colorMode: {
    preference: 'system',
    // storage: 'cookie',
    // cookieAttrs: {
    //   path: '/',
    //   domain: 'localhost',
    //   secure: true,
    //   samesite: 'None',
  },
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

})