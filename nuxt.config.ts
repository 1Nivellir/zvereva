// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: true,
  css: ['@/assets/scss/main.scss'],
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_URL,
    }
  }
})
