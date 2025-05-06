// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: true,
  css: ['@/assets/scss/main.scss', 'swiper/swiper-bundle.css'],
  modules: ['nuxt-swiper', '@nuxt/icon', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_URL,
    }
  }
})