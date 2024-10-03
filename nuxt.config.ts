// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages: true,
  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    "@nuxtjs/ngrok"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  routeRules: {
    "/": {
      redirect: '/major'
    }
  },
  ngrok: {},
})